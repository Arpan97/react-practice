import React from "react";
import { Link } from "react-router-dom";

interface Props {
  onClick?: () => void;
}

const AdminHeader: React.FC<Props> = ({ onClick }) => {
  return (
    <header className="bg-gray-800 text-white flex justify-between items-center">
      <div className="h-16 flex items-center justify-center">
        <Link to="/admin/dashboard">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>
      </div>
      <div className="sm:hidden px-4 sm:px-0" onClick={onClick}>
        <i className="ri-menu-line text-lg cursor-pointer"></i>
      </div>
    </header>
  );
};

export default React.memo(AdminHeader);
