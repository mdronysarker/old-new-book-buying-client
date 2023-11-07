import React from "react";
import Banner from "../components/layout/Banner";
import Addvertise from "../components/layout/Addvertise";
import Newarrival from "../components/layout/Newarrival";
import Bestseller from "../components/layout/Bestseller";
import Offer from "../components/layout/Offer";
//import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Addvertise />
      <Newarrival />
      <Bestseller />
      <Offer />
    </div>
  );
};

export default Home;
