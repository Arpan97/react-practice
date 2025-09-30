interface HeaderProps {
  title: string;
  isEdit?: boolean;
  onBack?: () => void;
}

const PageHeader = ({ title, isEdit, onBack }: HeaderProps) => {
  return (
    <div className="w-full shadow-md py-2 px-4 rounded-sm flex justify-between items-center">
      <p className="font-semibold text-sm md:text-base lg:text-xl uppercase">
        {title}
      </p>
      {isEdit && (
        <div className="border-1 border-red-400 py-2 px-4 rounded-sm shadow-md cursor-pointer">
          <p className="text-red-400 uppercase" onClick={onBack}>
            Go Back
          </p>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
