import React from "react";
import Navbar from "../Homepage/Navbar";
import { Carasoul } from "./Carasoul";
import Services from "./Services";
import Footer from "../Homepage/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carasoul />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
