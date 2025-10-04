import React from "react";
import type { ChangeEvent } from "react";
import ImageUpload from "./ImageUpload";
import PdfUpload from "./PdfUpload";
import MultiImageUpload from "./MultipleImageUpload";
import ToggleBtn from "../../atoms/ToggleBtn";

interface Option {
  _id: number | string;
  name?: string;
  value?: string;
}

interface FormRowProps {
  label: string;
  value?: string | number | boolean | File;
  options?: Option[]; // for dropdown or radio
  onChange?: (val: string | number | boolean | File) => void;
  type?: "text" | "number" | "file" | "image"; // for isInput or isImage
  isInput?: boolean;
  isDropdown?: boolean;
  isRadio?: boolean;
  isToggle?: boolean;
  isImage?: boolean;
  isPdf?: boolean;
  placeholder?: string;
  inputClass?: string;
  disable?: boolean;
  isMultiple?: boolean;
}

const FormRow: React.FC<FormRowProps> = ({
  label,
  value,
  options = [],
  onChange,
  type = "text",
  isInput,
  isDropdown,
  isRadio,
  isToggle,
  isImage,
  isPdf,
  placeholder,
  inputClass,
  disable,
  isMultiple,
}) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (isInput) {
      if (type === "number") onChange?.(Number(e.target.value));
      else onChange?.(e.target.value);
    } else if (isDropdown) {
      const findData = options?.find((itm) => itm?._id === e.target.value);
      onChange?.(findData);
    } else if (isRadio) {
      onChange?.(e.target.value);
    } else if (isImage || isPdf) {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) onChange?.(file);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center w-full gap-2 sm:gap-4 mb-4">
      {/* Label */}
      <div className="w-full sm:w-1/3 text-gray-700 font-medium text-sm md:text-base ">
        {label}
      </div>

      {/* Input / Control */}
      <div className="w-full sm:w-2/3">
        {isInput && (
          <input
            type={type}
            value={value as string | number | undefined}
            onChange={handleInputChange}
            className={`w-full lg:w-[50%] border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              disable ? "bg-gray-300" : "bg-transparent"
            } ${inputClass}`}
            placeholder={placeholder}
            disabled={disable}
          />
        )}
        {isDropdown && (
          <select
            value={value as string | number | undefined}
            onChange={handleInputChange}
            className={`w-full lg:w-[50%] border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputClass}`}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options?.length > 0
              ? options?.map((opt) => {
                  const optionData = opt?.name ? opt?.name : opt?.value;
                  return (
                    <option key={opt?._id} value={JSON.stringify(opt?._id)}>
                      {optionData}
                    </option>
                  );
                })
              : null}
          </select>
        )}

        {isRadio && (
          <div className="flex flex-wrap gap-4">
            {options.map((opt) => (
              <label
                key={opt.value.toString()}
                className="flex items-center gap-1"
              >
                <input
                  type="radio"
                  value={opt.value.toString()}
                  checked={value === opt.value}
                  onChange={() => onChange?.(opt.value)}
                />
                {opt.label}
              </label>
            ))}
          </div>
        )}

        {isToggle && (
          <ToggleBtn
            value={value as boolean}
            handleChange={(val: boolean) => onChange?.(val)}
          />
        )}

        {isImage && (
          <ImageUpload value={value} onUpload={(file) => onChange?.(file)} />
        )}

        {isMultiple && (
          <MultiImageUpload
            value={value}
            onUpload={(file) => onChange?.(file)}
          />
        )}

        {isPdf && (
          <PdfUpload value={value} onUpload={(file) => onChange?.(file)} />
        )}
      </div>
    </div>
  );
};

export default FormRow;
