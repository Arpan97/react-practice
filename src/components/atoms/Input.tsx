import React, { useState } from "react";

interface InputProps {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  isError?: boolean;
  helperText?: string;
  className?: string;
  inputClassName?: string;
  isDisable?: boolean;
  isMultiline?: boolean;
  numOfRows?: number;
  isRequired?: boolean;
}

const Input: React.FC<InputProps> = ({
  label = "",
  value = "",
  onChange = () => {},
  isError = false,
  helperText = "",
  className = "",
  isDisable = false,
  isMultiline = false,
  numOfRows = 0,
  inputClassName = "",
  isRequired = false,
}) => {
  const [error, setError] = useState(false);

  const handleBlur = () => {
    if (String(value).trim() === "" && isRequired) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className={`relative max-w-[100vh] ${className}`}>
      {isMultiline ? (
        <textarea
          rows={numOfRows || 3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          className={`peer block w-full border-1 ${
            error || isError ? "border-red-500" : "border-gray-400"
          } bg-transparent px-2 pt-5 pb-2 text-lg text-black rounded-md focus:outline-none ${inputClassName}`}
          placeholder=" "
          required={isRequired}
          disabled={isDisable}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          className={`peer block w-full border-1 ${
            error || isError ? "border-red-500" : "border-gray-400"
          } bg-transparent px-2 pt-3 pb-2 text-lg text-black rounded-md focus:outline-none focus:border-blue-500 ${inputClassName}`}
          placeholder=" "
          required={isRequired}
          disabled={isDisable}
        />
      )}
      <label
        className={`
          absolute left-2 text-gray-500 transition-all
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
          peer-focus:top-0.5 peer-focus:text-xs
          ${value ? "top-0.5 text-xs" : ""}
          ${error || isError ? "text-red-500" : ""}
        `}
      >
        {label}
        {isRequired ? "*" : ""}
      </label>

      {(error || isError) && (
        <p className="mt-1 text-sm text-red-500">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
