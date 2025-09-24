import React from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = "bottom",
}) => {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div className="relative inline-block group">
      {/* Trigger element */}
      {children}

      {/* Tooltip box */}
      <div
        className={`
          absolute z-10 px-3 py-1 rounded bg-black text-white text-xs
          whitespace-nowrap opacity-0 pointer-events-none
          transition duration-200 ease-out transform
          group-hover:opacity-100 group-hover:translate-y-0
          ${positionClasses[position]}
        `}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
