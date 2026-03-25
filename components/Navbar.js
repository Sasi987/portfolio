import React from "react";
import logo from "../assta/log.jpeg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

       <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Return Itech Solution Logo" className="logo-img" />
        <h1 className="logo-text">Return Itech Solution</h1>
      </div>
    </nav>

        <ul className="nav-links">
          <li> <a href="hero">Home</a></li>       
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;