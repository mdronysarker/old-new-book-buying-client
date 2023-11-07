import NavBar from "../components/layout/NavBar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
