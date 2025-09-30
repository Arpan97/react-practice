import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Auth = lazy(() => import("../pages/Admin/Auth"));
const Dashboard = lazy(() => import("../pages/Admin/Dashboard"));
const CreateCategory = lazy(
  () => import("../pages/Admin/Category/createCategory")
);
const ListCategory = lazy(() => import("../pages/Admin/Category/editCategory"));
const CreateSubCategory = lazy(
  () => import("../pages/Admin/SubCategory/createSubCategory")
);
const ListSubCategory = lazy(
  () => import("../pages/Admin/SubCategory/editSubCategory")
);
const CreateDeal = lazy(() => import("../pages/Admin/Deals/createDeal"));
const EditDeal = lazy(() => import("../pages/Admin/Deals/editDeal"));
const UserDetail = lazy(() => import("../pages/Admin/User"));
const CreateProduct = lazy(
  () => import("../pages/Admin/Products/createProduct")
);
const EditProduct = lazy(() => import("../pages/Admin/Products/editProduct"));

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/category/create" element={<CreateCategory />} />
      <Route path="/category/list" element={<ListCategory />} />
      <Route path="/subCategory/create" element={<CreateSubCategory />} />
      <Route path="/subCategory/list" element={<ListSubCategory />} />
      <Route path="/deal/create" element={<CreateDeal />} />
      <Route path="/deal/list" element={<EditDeal />} />
      <Route path="/user" element={<UserDetail />} />
      <Route path="/products/create" element={<CreateProduct />} />
      <Route path="/products/list" element={<EditProduct />} />
    </Routes>
  );
};

export default AdminRoute;
