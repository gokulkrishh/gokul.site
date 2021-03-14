import React from "react";

import "styles/layout.css";
import SEO from "./seo";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <SEO />
      {children}
    </main>
  );
};

export default Layout;
