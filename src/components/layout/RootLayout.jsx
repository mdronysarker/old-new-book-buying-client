import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
