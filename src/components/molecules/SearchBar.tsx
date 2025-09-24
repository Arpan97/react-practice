import type React from "react";

interface SearchProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  onClick: () => void;
  buttonText?: string;
  className?: string;
  buttonClass?: string;
}

const SearchBar: React.FC<SearchProps> = ({
  value = "",
  onChange = () => {},
  placeholder = "",
  onClick = () => {},
  buttonText = "",
  className = "",
  buttonClass = "",
}) => {
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div
      className={`border-1 border-gray-200 rounded-md flex mx-auto overflow-hidden items-center bg-white ${className}`}
    >
      <div className="w-[70%] flex items-center">
        <i className="ri-search-2-line mx-2"></i>
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChangeText}
          className="w-full py-3 outline-none focus:ring-0 focus:outline-none"
        />
      </div>
      <div
        onClick={onClick}
        className={`w-[30%] bg-blue-500 py-3 items-center flex justify-center rounded-md mr-1 hover:cursor-pointer  ${buttonClass}`}
      >
        <p className="text-white font-bold text-sm">{buttonText}</p>
      </div>
    </div>
  );
};

export default SearchBar;
