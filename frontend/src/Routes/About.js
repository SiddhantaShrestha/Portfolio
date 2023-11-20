import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImage2 from "../Components/HeroImage2.jsx";
import AboutMe from "../Components/AboutMe";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage2
        heading="ABOUT."
        text="Im a friendly MERN Stack Developer"
      ></HeroImage2>
      <AboutMe></AboutMe>
      <Footer></Footer>
    </div>
  );
};

export default About;
