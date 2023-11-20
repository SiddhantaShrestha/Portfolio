import "../CSS/HeroImage.css";
import React from "react";

import heroBg from "../Images/heroBg.jpg";
import sharp from "../Images/sharp.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="heroSection">
      <div className="mask">
        <img className="heroImg" src={heroBg} alt={sharp}></img>
      </div>

      <div className="content">
        <p>HI, I'M A WEB DEVELOPER</p>
        <h1>MERN Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn-type">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
