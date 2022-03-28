import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="nav-bar">
      <h1>Full-Stack E-Commerce</h1>

      <nav className="text-center">
        Login
        <p>Logout</p>
        <p>Signup</p>
      </nav>
    </header>
  );
};

export default Header;
