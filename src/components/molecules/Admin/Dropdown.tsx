import React from "react";

interface OptionProps {
  _id: string | number;
  label: string;
  value: string;
}

interface Props {
  label: string;
  placeholder?: string;
  isRequired?: boolean;
  value: string;
  disable?: boolean;
  option?: OptionProps[];
  onChange?: (selected: OptionProps | null) => void;
}

const Dropdown: React.FC<Props> = ({
  label,
  placeholder,
  isRequired = false,
  value,
  disable,
  option = [],
  onChange = () => {},
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedOption =
      option.find(
        (opt) => opt.value.toLowerCase() === selectedValue.toLowerCase()
      ) || null;
    onChange?.(selectedOption);
  };
  return (
    <div className="flex flex-col my-2">
      <label className="font-semibold text-base uppercase">
        {label}
        {isRequired ? <sup className="text-red-500 text-sm ml-2">*</sup> : null}
      </label>
      <select
        className="border py-2 px-3 uppercase w-41 md:w-45 lg:w-55 rounded mt-2"
        value={value}
        disabled={disable}
        onChange={handleChange}
      >
        <option value={""} disabled>
          {placeholder}
        </option>
        {option?.map((item: OptionProps) => {
          return <option value={item?.value}>{item?.label}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
