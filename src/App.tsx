import { BasicLayout } from "./components";
import UserRoute from "./components/routes/UserRoute";

const App = () => {
  return (
    <BasicLayout>
      <UserRoute />
    </BasicLayout>
  );
};

export default App;
