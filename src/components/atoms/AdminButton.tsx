interface ButtonProps {
  label: string;
  className?: string;
  disable?: boolean;
  onBtnClick: () => void;
}

const AdminButton = ({
  label = "",
  className,
  disable = false,
  onBtnClick = () => {},
}: ButtonProps) => {
  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onBtnClick();
  };
  return (
    <button
      className={`py-3 rounded text-sm text-center text-white font-bold uppercase px-2 shadow-lg  
      ${
        disable
          ? "hover:cursor-not-allowed bg-gray-400"
          : "hover:cursor-pointer bg-gray-700 "
      } mr-3 ${className}`}
      onClick={handleButton}
      disabled={disable}
    >
      {label}
    </button>
  );
};

export default AdminButton;
