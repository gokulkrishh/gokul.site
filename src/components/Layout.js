import React from "react";

import "tailwindcss/tailwind.css";

export default ({ children, className }) => (
  <div className={className}>{children}</div>
);
