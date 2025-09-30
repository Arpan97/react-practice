import { useLocation, Outlet } from "react-router-dom";
import AdminHeader from "../organisms/Admin/AdminHeader";
import AdminFooter from "../organisms/Admin/AdminFooter";
import Sidebar from "../organisms/Admin/Sidebar";
import { useState } from "react";

const AdminLayout = () => {
  const location = useLocation();
  const noLayoutPaths = ["/admin"]; // Admin login shouldn’t show sidebar/header
  const isAuthPage = noLayoutPaths.includes(location.pathname);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {isAuthPage ? (
        <Outlet />
      ) : (
        <>
          <AdminHeader onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div className="flex flex-1 min-h-[calc(100vh-64px-64px)]">
            <Sidebar
              className="bg-gray-800 text-white"
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
            <main className="flex-1 bg-gray-100 p-6 overflow-auto sm:ml-64">
              <Outlet />
            </main>
          </div>
          <AdminFooter />
        </>
      )}
    </div>
  );
};

export default AdminLayout;
