import React from "react";

import Menu from "./menu";
import Bio from "./bio";

import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <Menu />
      <Bio />
    </header>
  );
};

export default Header;
