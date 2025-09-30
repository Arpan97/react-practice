import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarData } from "../../../utils/constantData";

interface SidebarProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

interface SidebarItem {
  key: string;
  label: string;
  path?: string;
  children?: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ className, isOpen, onClose }) => {
  const location = useLocation();
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggleAccordion = (key: string) => {
    setOpenKey(openKey === key ? null : key);
  };

  const isActive = (path?: string) => path === location.pathname;

  const renderItem = (item: SidebarItem) => {
    const hasChildren = !!item.children;
    const childActive = item.children?.some((child) => isActive(child.path));

    return (
      <div key={item.key}>
        {hasChildren ? (
          <button
            onClick={() => toggleAccordion(item.key)}
            className={`w-full flex justify-between items-center p-2 rounded hover:bg-gray-700 ${
              childActive || openKey === item.key ? "bg-gray-700" : ""
            }`}
          >
            <span>{item.label}</span>
            <span>{openKey === item.key ? "−" : "+"}</span>
          </button>
        ) : (
          <Link
            onClick={onClose}
            to={item.path || "#"}
            className={`block p-2 rounded hover:bg-gray-700 ${
              isActive(item.path) ? "bg-gray-700" : ""
            }`}
          >
            {item.label}
          </Link>
        )}

        {hasChildren && (openKey === item.key || childActive) && (
          <div className="ml-4 mt-1 space-y-1">
            {item.children?.map((child) => (
              <Link
                onClick={onClose}
                key={child.key}
                to={child.path || "#"}
                className={`block p-2 rounded text-sm hover:bg-gray-700 ${
                  isActive(child.path) ? "bg-gray-700" : ""
                }`}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={`sm:flex ${
        isOpen ? "block w-full z-10" : "hidden w-64"
      } flex-col h-screen fixed top-0 left-0 ${className}`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-gray-700">
        <Link to="/admin/dashboard" onClick={onClose}>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {sidebarData.map(renderItem)}
      </nav>
    </aside>
  );
};

export default Sidebar;
