import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("../pages/User/Auth/Login"));
const CreateAccount = lazy(() => import("../pages/User/Auth/CreateAccount"));
const Dashboard = lazy(() => import("../pages/User/Dashboard"));
const Product = lazy(() => import("../pages/User/Product"));
const Profile = lazy(() => import("../pages/User/Profile"));
const Cart = lazy(() => import("../pages/User/Cart"));
const CheckOut = lazy(() => import("../pages/User/Cart/Checkout"));
const MyOrders = lazy(() => import("../pages/User/Orders"));
const OrderDetail = lazy(() => import("../pages/User/Orders/OrderDetails"));

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/product/:_id" element={<Product />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/order" element={<MyOrders />} />
      <Route path="/order/:_id" element={<OrderDetail />} />
    </Routes>
  );
};

export default UserRoute;
