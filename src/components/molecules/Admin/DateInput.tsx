import React from "react";

interface Props {
  label: string;
  value: string;
  onChange?: (val: string) => void;
  isRequired?: boolean;
}

const DateInput: React.FC<Props> = ({
  label = "",
  value,
  onChange = () => {},
  isRequired = false,
}) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className="flex flex-col my-2">
      <label className="font-semibold sm:text-sm md:text-base uppercase">
        {label}
        {isRequired ? <sup className="text-red-500 text-sm ml-2">*</sup> : null}
      </label>
      <input
        type="date"
        className={`border py-2 px-3 uppercase sm:w-full md:40 lg:w-55 rounded mt-2`}
        value={value}
        onChange={(e) => handleDateChange(e)}
      />
    </div>
  );
};

export default React.memo(DateInput);
