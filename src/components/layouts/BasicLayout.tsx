import Container from "../organisms/Container";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { useLocation, Outlet } from "react-router-dom";

const BasicLayout = () => {
  const location = useLocation();
  const noLayoutPaths = ["/login", "/createAccount"];
  const isAuthPage = noLayoutPaths.includes(location.pathname);

  return (
    <Container>
      {isAuthPage ? (
        <Outlet />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </Container>
  );
};

export default BasicLayout;
