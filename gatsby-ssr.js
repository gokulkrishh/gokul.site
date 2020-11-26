import React from "react";

export const onRenderBody = ({ setHeadComponents, pathname = "" }) => {
  if (pathname === "/book") {
    setHeadComponents([
      <script
        key="tracking"
        src="https://gumroad.com/js/gumroad.js"
        type="text/javascript"
        async
      />,
    ]);
  }
};
