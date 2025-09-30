// import { BasicLayout } from "./components";
// import UserRoute from "./components/routes/UserRoute";

// const App = () => {
//   return (
//     <BasicLayout>
//       <UserRoute />
//     </BasicLayout>
//   );
// };

// export default App;

import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";
import { BasicLayout } from "./components";
import AdminLayout from "./components/layouts/AdminLayout";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* User Section */}
        <Route element={<BasicLayout />}>
          <Route path="/*" element={<UserRoute />} />
        </Route>

        {/* Admin Section */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/*" element={<AdminRoute />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
