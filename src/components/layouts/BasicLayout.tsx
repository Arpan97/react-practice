import React from "react";
import Container from "../organisms/Container";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const noLayoutPaths = ["/login", "/createAccount"];
  const isAuthPage = noLayoutPaths.includes(location.pathname);

  return (
    <Container>
      {isAuthPage ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </Container>
  );
};

export default BasicLayout;
