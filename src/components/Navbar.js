import React from "react";
import logo from "../assets/Chick_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Chick Logo" className="navbar-logo" />
        <span className="navbar-title">CHICK</span>
      </div>
      <div className="navbar-right">
        <a href="#home" className="navbar-link">
          Home
        </a>
        <a href="#guide" className="navbar-link">
          Guide
        </a>
        <a href="#download" className="navbar-link">
          Download
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
