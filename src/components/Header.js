import React from "react";
import { Link } from "gatsby";
import { useRef } from "react";

import GokulPngImage from "../images/gokul.png";

const Header = ({ hideLinks = false }) => {
  const themeRef = useRef(false);
  return (
    <header>
      <div className="grid">
        <h1>
          <a href="/">
            <img src={GokulPngImage} alt="gokul" />
          </a>
        </h1>
        {!hideLinks && (
          <ul className="menu">
            <li>
              <Link to="/about/" activeClassName="active">
                About
              </Link>
            </li>
            <li>
              <Link to="/book/" activeClassName="active">
                Book
              </Link>
            </li>
            <li>
              <Link to="/uses/" activeClassName="active">
                Uses
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
