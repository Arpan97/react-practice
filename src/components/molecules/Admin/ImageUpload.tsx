import React, { useEffect, useState, useRef } from "react";
import type { ChangeEvent } from "react";

interface ImageUploadProps {
  value?: string | null; // URL or base64 for editing
  onUpload?: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onUpload }) => {
  const [image, setImage] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null); // ref to clear input

  useEffect(() => {
    setImage(value || null);
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setUploading(true);
      setProgress(0);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploading(false);
            setImage(reader.result as string);
            onUpload?.(file);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setImage(null);
    setProgress(0);
    setUploading(false);
    if (inputRef.current) {
      inputRef.current.value = ""; // Clear file input so same file can be uploaded again
    }
  };

  return (
    <div className="flex flex-col w-full max-w-xs">
      <div className="relative w-30 rounded flex items-center overflow-hidden cursor-pointer">
        <input
          ref={inputRef} // attach ref
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />

        {image ? (
          <img
            src={image}
            alt="upload"
            className="object-contain w-20 h-20 rounded"
          />
        ) : (
          <i className="ri-export-fill text-4xl text-gray-400"></i>
        )}

        {image && !uploading && (
          <button
            onClick={handleRemove}
            type="button"
            className="absolute top-0 right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs cursor-pointer"
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

export default ImageUpload;
