import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="flex-row">
      <li className="mx-1">
        <Link to="/signup">
          Signup
        </Link>
      </li>
      <li className="mx-1">
        <Link to="/login">
          Login
        </Link>
      </li>
    </ul>
  );
};

export default Header;
