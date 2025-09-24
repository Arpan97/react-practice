// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";

// interface SelectOptionProps {
//   value: string;
//   label: string;
//   _id: number;
// }

// interface SelectProps {
//   option: SelectOptionProps[];
//   label: string;
//   helperText?: string;
//   isError?: boolean;
//   className?: string;
//   inputClassName?: string;
//   value: string;
//   onChange: (val: string) => void;
// }

// const Select: React.FC<SelectProps> = ({
//   label = "",
//   option = [],
//   helperText = "",
//   isError = false,
//   className = "",
//   inputClassName = "",
//   value = "",
//   onChange = () => {},
// }) => {
//   const onChangeDropdown = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onChange(e.target.value);
//   };
//   return (
//     <div className={`mt-4 ${className}`}>
//       <TextField
//         id="outlined-select-currency"
//         select
//         label={label}
//         defaultValue={option[0]?.value}
//         helperText={helperText}
//         error={isError}
//         placeholder="Select option..."
//         className={inputClassName}
//         value={value}
//         onChange={onChangeDropdown}
//       >
//         {option.map((options) => (
//           <MenuItem key={options.value} value={options.value}>
//             {options.label}
//           </MenuItem>
//         ))}
//       </TextField>
//     </div>
//   );
// };

// export default Select;

import React, { useState } from "react";

interface SelectOptionProps {
  value: string;
  label: string;
  _id: number;
}

interface SelectProps {
  option: SelectOptionProps[];
  label: string;
  helperText?: string;
  isError?: boolean;
  className?: string;
  inputClassName?: string;
  value: string;
  onChange: (val: string) => void;
  isRequired?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label = "",
  option = [],
  helperText = "",
  isError = false,
  className = "",
  inputClassName = "",
  value = "",
  onChange = () => {},
  isRequired = false,
}) => {
  const [error, setError] = useState(false);

  const handleBlur = () => {
    if (value === "" && isRequired) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`relative max-w-[100vh] ${className}`}>
      <select
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`peer block w-full border-1 ${
          error || isError ? "border-red-500" : "border-gray-400"
        } bg-transparent px-2 pt-3 pb-2 text-lg text-black rounded-md focus:outline-none appearance-none ${inputClassName}`}
        required={isRequired}
      >
        <option value="" hidden />
        {option.map((opt) => (
          <option key={opt._id} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <label
        className={`
          absolute left-2 text-gray-400 transition-all
          peer-placeholder-shown:top-0.5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400
          peer-focus:top-0.5 peer-focus:text-xs
          ${value ? "top-0.5 text-xs" : "top-3"}
          ${error || isError ? "text-red-500" : ""}
        `}
      >
        {label}
        {isRequired ? "*" : ""}
      </label>

      {(error || isError) && helperText && (
        <p className="mt-1 text-sm text-red-500">{helperText}</p>
      )}
    </div>
  );
};

export default Select;
