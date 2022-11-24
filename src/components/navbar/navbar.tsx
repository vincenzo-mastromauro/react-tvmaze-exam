import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Components.scss";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Search Page</Link>
        </li>
        <li>
          <Link to='/dashboard'>Favorite Page</Link>
        </li>
        <li>
          <Link to='/logout'>logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
