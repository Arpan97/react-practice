import React, { useEffect, useState } from "react";
import type { ChangeEvent } from "react";

interface PdfUploadProps {
  value?: string | null; // filename or url
  onUpload?: (file: File) => void;
}

const PdfUpload: React.FC<PdfUploadProps> = ({ value, onUpload }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setFileName(value || null);
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];

    setUploading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setFileName(file.name);
          onUpload?.(file);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const handleRemove = () => {
    setFileName(null);
    setProgress(0);
    setUploading(false);
  };

  return (
    <div className="flex flex-col w-full max-w-xs">
      <div className="relative w-30 rounded flex items-center cursor-pointer">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />

        {fileName ? (
          <div className="flex flex-col">
            <i className="ri-file-pdf-2-fill text-4xl text-red-500"></i>
            <span className="truncate pr-6">{fileName}</span>
          </div>
        ) : (
          <i className="ri-file-pdf-2-fill text-4xl text-gray-400"></i>
        )}

        {fileName && !uploading && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemove();
            }}
            type="button"
            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs cursor-pointer"
          >
            ×
          </button>
        )}
      </div>

      {uploading && (
        <div className="w-full bg-gray-200 h-2 rounded mt-2">
          <div
            className="bg-blue-500 h-2 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default PdfUpload;
