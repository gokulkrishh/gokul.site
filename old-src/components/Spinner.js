import React from "react";

export default ({ show }) => {
  if (!show) return null;
  return (
    <div className="spinner">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
