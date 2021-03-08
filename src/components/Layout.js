import React from "react";

import "../styles/layout.css";

const Layout = ({ children }) => {
  return <main className="layout">{children}</main>;
};

export default Layout;
