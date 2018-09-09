import React from "react";
import Link from "gatsby-link";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="grid">
          <h1 />
          <ul className="menu">
            <li>
              <Link to="/" exact activeClassName="active">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/opensources" activeClassName="active">
                Open Sources
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">
                About
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
