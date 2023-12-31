import "../CSS/Footer.css";

import React from "react";

import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Thasikhel-5</p>
              <p>Lalitpur</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +977 9803326254
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              siddhanta.shrestha2004@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About me</h4>
          <p>
            This is Siddhanta Shrestha. MERN Stack developer. I enjoy discussing
            and working on new projects and web development challenges.
            <div className="socials">
              <a
                href="https://www.facebook.com/undertakerbestwrestler.55/"
                target="blank"
              >
                <FaFacebook
                  size={28}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
              <a
                href="https://www.facebook.com/undertakerbestwrestler.55/"
                target="blank"
              >
                <FaTwitter
                  size={28}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/siddhanta-shrestha-321207286/"
                target="blank"
              >
                <FaLinkedin
                  size={28}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
