import React from "react";

import Seo from "./seo";

import "styles/layout.css";

const Layout = ({ children, customSEO = false }) => {
  return (
    <main className="layout">
      {!customSEO && <Seo />}
      {children}
    </main>
  );
};

export default Layout;
