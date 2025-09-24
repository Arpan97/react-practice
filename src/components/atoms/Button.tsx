interface ButtonProps {
  label: string;
  className?: string;
}

const Button = ({ label = "", className }: ButtonProps) => {
  return (
    <div
      className={`bg-blue-300 py-2 text-sm text-center font-bold uppercase px-2 shadow-lg hover:cursor-pointer hover:scale-100 scale-95 ${className}`}
    >
      {label}
    </div>
  );
};

export default Button;
