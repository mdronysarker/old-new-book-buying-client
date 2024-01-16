import React from "react";
import Banner from "../components/layout/Banner";
import Newarrival from "../components/layout/Newarrival";
import Bestseller from "../components/layout/Bestseller";

//import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Newarrival />
      <Bestseller />
    </div>
  );
};

export default Home;
