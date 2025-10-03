interface ToggleProps {
  value: boolean;
  handleChange: (val: boolean) => void;
}

const ToggleBtn: React.FC<ToggleProps> = ({ value, handleChange }) => {
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          checked={value}
          onChange={(val) => {
            handleChange(val.target.checked);
          }}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleBtn;
