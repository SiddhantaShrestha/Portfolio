import React from "react";
import Navbar from "../Components/Navbar";
import HeroImage from "../Components/HeroImage.jsx";
import Footer from "../Components/Footer";
import Work from "../Components/Work.jsx";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage></HeroImage>
      <Work></Work>
      <Footer></Footer>
    </div>
  );
};

export default Home;
