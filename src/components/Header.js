import React from "react";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { useRef } from "react";

const Header = ({ hideLinks = false }) => {
  const themeRef = useRef(false);
  return (
    <header>
      <div className="grid">
        <h1>
          <a href="/">gokul.site</a>
        </h1>
        {!hideLinks && (
          <ul className="menu">
            <li>
              <Link to="/" activeClassName="active">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/book/" activeClassName="active">
                Book
              </Link>
            </li>
            <li>
              <Link to="/about/" activeClassName="active">
                About
              </Link>
            </li>
            <li className="theme-switcher">
              <ThemeToggler>
                {({ theme, toggleTheme }) => {
                  return (
                    <>
                      <input
                        type="checkbox"
                        ref={themeRef}
                        onChange={() => {}}
                        checked={theme === "dark"}
                      />
                      <label
                        onClick={(e) => {
                          toggleTheme(theme === "dark" ? "light" : "dark");
                        }}
                      />
                    </>
                  );
                }}
              </ThemeToggler>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
