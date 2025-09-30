import React, { useEffect, useRef, useState } from "react";

interface TextEditorProps {
  value?: string;
  onChange?: (value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ value = "", onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState({
    bold: false,
    italic: false,
    underline: false,
    bullets: false,
  });

  // === Commands ===
  const handleCommand = (command: string, value?: string) => {
    if (!editorRef.current) return;

    editorRef.current.focus();

    // For font size → use CSS not <font>
    if (command === "fontSize") {
      document.execCommand("styleWithCSS", false, "true");
      document.execCommand("fontSize", false, "7"); // dummy
      const elements = window.getSelection()?.anchorNode?.parentElement;
      if (elements) {
        elements.removeAttribute("size");
        elements.style.fontSize =
          value === "2"
            ? "12px"
            : value === "3"
            ? "14px"
            : value === "5"
            ? "18px"
            : value === "7"
            ? "24px"
            : "14px";
      }
    } else {
      document.execCommand(command, false, value);
    }

    updateToolbarState();
    triggerChange();
  };

  const updateToolbarState = () => {
    setActive({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      bullets: document.queryCommandState("insertUnorderedList"),
    });
  };

  const triggerChange = () => {
    if (onChange && editorRef.current) {
      // Wrap everything in <div> for consistency
      onChange(`<div class="description">${editorRef.current.innerHTML}</div>`);
    }
  };

  // === Table insertion ===
  const insertTable = () => {
    const rows = parseInt(prompt("Enter number of rows:", "2") || "2", 10);
    const cols = parseInt(prompt("Enter number of columns:", "2") || "2", 10);

    let table =
      "<table style='border-collapse:collapse; width:100%; border:1px solid black'>";
    for (let i = 0; i < rows; i++) {
      table += "<tr>";
      for (let j = 0; j < cols; j++) {
        table +=
          "<td style='border:1px solid black; padding:6px; min-width:60px'>Cell</td>";
      }
      table += "</tr>";
    }
    table += "</table><br/>";
    handleCommand("insertHTML", table);
  };

  // === Tab inside table = add new row ===
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Tab") {
      const selection = window.getSelection();
      if (selection && selection.anchorNode) {
        const cell = selection.anchorNode.parentElement;
        if (cell && cell.tagName === "TD") {
          e.preventDefault();
          const row = cell.parentElement;
          const table = row?.parentElement;
          if (table && table.tagName === "TBODY") {
            const cols = row?.children.length || 1;
            const newRow = document.createElement("tr");
            for (let i = 0; i < cols; i++) {
              const newCell = document.createElement("td");
              newCell.textContent = "Cell";
              newCell.style.border = "1px solid black";
              newCell.style.padding = "6px";
              newCell.style.minWidth = "60px";
              newRow.appendChild(newCell);
            }
            table.appendChild(newRow);
            (newRow.firstChild as HTMLElement)?.focus();
          }
        }
      }
    }
  };

  // === Ensure paragraphs wrap text ===
  const handleInput = () => {
    if (editorRef.current) {
      // Ensure child text is always inside <p>
      const div = editorRef.current;
      [...div.childNodes].forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
          const p = document.createElement("p");
          p.textContent = node.textContent;
          div.replaceChild(p, node);
        }
      });
      triggerChange();
    }
  };

  // === Load initial value ===
  useEffect(() => {
    if (editorRef.current && value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  // === Track toolbar state ===
  useEffect(() => {
    const handler = () => updateToolbarState();
    document.addEventListener("selectionchange", handler);
    return () => document.removeEventListener("selectionchange", handler);
  }, []);

  return (
    <div className="w-full border-1 shadow bg-transparent border-gray-200 rounded overflow-hidden mb-3">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-2 border-b border-gray-200 bg-gray-50">
        <button
          type="button"
          onClick={() => handleCommand("bold")}
          className={`px-2 py-1 border rounded hover:bg-gray-200 font-bold ${
            active.bold ? "bg-gray-300" : ""
          }`}
        >
          B
        </button>
        <button
          type="button"
          onClick={() => handleCommand("italic")}
          className={`px-2 py-1 border rounded hover:bg-gray-200 italic ${
            active.italic ? "bg-gray-300" : ""
          }`}
        >
          I
        </button>
        <button
          type="button"
          onClick={() => handleCommand("underline")}
          className={`px-2 py-1 border rounded hover:bg-gray-200 underline ${
            active.underline ? "bg-gray-300" : ""
          }`}
        >
          U
        </button>
        <button
          type="button"
          onClick={() => handleCommand("insertUnorderedList")}
          className={`px-2 py-1 border rounded hover:bg-gray-200 ${
            active.bullets ? "bg-gray-300" : ""
          }`}
        >
          • Bullets
        </button>
        <select
          onChange={(e) => handleCommand("fontSize", e.target.value)}
          defaultValue=""
          className="border rounded px-2"
        >
          <option value="" disabled>
            Font Size
          </option>
          <option value="2">Small</option>
          <option value="3">Normal</option>
          <option value="5">Large</option>
          <option value="7">Huge</option>
        </select>
        <input
          type="color"
          onChange={(e) => handleCommand("foreColor", e.target.value)}
          className="w-8 h-8 p-0 border rounded cursor-pointer"
        />
        <button
          type="button"
          onClick={insertTable}
          className="px-2 py-1 border rounded hover:bg-gray-200"
        >
          Table
        </button>
      </div>

      {/* Editable area */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        className="min-h-[250px] p-3 focus:outline-none"
      >
        <p>Start writing here...</p>
      </div>
    </div>
  );
};

export default TextEditor;
