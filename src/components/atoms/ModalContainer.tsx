import React from "react";

interface Props {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

const ModalContainer: React.FC<Props> = ({ children, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 relative w-[90%] max-w-md">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
