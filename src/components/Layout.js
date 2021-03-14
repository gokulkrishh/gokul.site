import React from "react";

import SEO from "./seo";

import "styles/layout.css";

const Layout = ({ children, customSEO = false }) => {
  return (
    <main className="layout">
      {!customSEO && <SEO />}
      {children}
    </main>
  );
};

export default Layout;
