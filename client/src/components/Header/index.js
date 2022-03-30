import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex-row">
      <h1>
        <Link to="/">
          {/* <span role="img" aria-label="Boat">
            🛥️
          </span> */}
          <img src="../images/logo_size_invert.jpg" />
        </Link>
      </h1>
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/signup">Signup</Link>
        </li>
        <li className="mx-1">
          <Link to="/login">Login</Link>
        </li>
        <li className="mx-1">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
