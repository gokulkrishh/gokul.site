import React from "react";
import { Link } from "gatsby";

import gokulPng from "images/gokul.png";

import "styles/menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/" className="logo">
        <img src={gokulPng} alt="Gokulakrishnan Kalaikovan" />
      </Link>
      <ul className="menu-list">
        <li>
          <Link to="/blog" activeClassName="active">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/book" activeClassName="active">
            Book
          </Link>
        </li>
        <li>
          <Link to="/uses" activeClassName="active">
            Uses
          </Link>
        </li>
        {/* <li>
          <Link to="/dashboard" activeClassName="active">
            Dashboard
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Menu;
