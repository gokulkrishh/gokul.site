import React from "react";
import { Link } from "gatsby";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="grid">
          <p>
            <i>&copy;</i> <span>Gokulakrishnan Kalaikovan</span>
          </p>
          <p className="built">
            Made with
            <a href="https://next.gatsbyjs.org/" target="_blank">
              Gatsby
            </a>
            & some
            <i>❤</i>
          </p>
        </div>
      </footer>
    );
  }
}
