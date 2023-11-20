import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImage2 from "../Components/HeroImage2.jsx";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage2 heading="CONTACT." text="Lets have a chat"></HeroImage2>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
