import React from "react";

import "../styles/index.css";

export default ({ children, className = "" }) => (
  <div
    className={`bg-white dark:bg-gray-900 dark:text-white grid justify-center ${className}`}
  >
    {children}
  </div>
);
