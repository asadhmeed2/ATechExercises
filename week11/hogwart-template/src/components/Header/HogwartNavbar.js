import React from "react";
import "./HogwartNavbar.css";
import { Link } from "react-router-dom";

const HogwartNavbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/">
        Home
      </Link>
      <Link className="navbar-link" to="/about">
        About
      </Link>
    </nav>
  );
};

export default HogwartNavbar;
