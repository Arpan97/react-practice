import React, { useEffect, useState, useRef } from "react";
import type { ChangeEvent } from "react";

interface MultiImageUploadProps {
  value?: string | string[] | null; // single or multiple image URLs/base64
  onUpload?: (file: File | File[]) => void;
}

const MultiImageUpload: React.FC<MultiImageUploadProps> = ({
  value,
  onUpload,
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (value) {
      if (Array.isArray(value)) {
        setImages(value);
      } else {
        setImages([value]);
      }
    } else {
      setImages([]);
    }
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const files = Array.from(e.target.files);

    files.forEach((file, idx) => {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadingIndex(images.length + idx);
        setProgress(0);

        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setUploadingIndex(null);
              setImages((prevImages) => [
                ...prevImages,
                reader.result as string,
              ]);

              onUpload?.(files);
              return 100;
            }
            return prev + 10;
          });
        }, 100);
      };
      reader.readAsDataURL(file);
    });

    if (inputRef.current) {
      inputRef.current.value = ""; // reset input
    }
  };

  const handleRemove = (index: number) => {
    setImages((prev) => {
      const newArr = prev.filter((_, i) => i !== index);
      onUpload?.([]);
      return newArr;
    });
  };

  return (
    <div className="flex flex-wrap gap-4">
      {/* Upload box */}
      <div className="relative rounded flex items-center justify-center cursor-pointer overflow-hidden">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
          multiple={true}
        />
        <i className="ri-image-add-line text-4xl text-gray-400"></i>
      </div>

      {/* Preview thumbnails */}
      {images.map((img, idx) => (
        <div key={idx} className="relative w-24 h-24 rounded overflow-hidden">
          <img src={img} alt="preview" className="object-cover w-full h-full" />
          <button
            type="button"
            onClick={() => handleRemove(idx)}
            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
          >
            ×
          </button>
          {uploadingIndex === idx && (
            <div className="absolute bottom-0 left-0 w-full bg-gray-200 h-2">
              <div
                className="bg-blue-500 h-2"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiImageUpload;
