import React from "react";
import "./index.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import About from "./Routes/About";
import Contact from "./Routes/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
