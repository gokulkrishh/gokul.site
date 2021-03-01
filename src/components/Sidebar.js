import React from "react";

export default () => {
  return (
    <div className="sidebar">
      <h2>Latest Video's</h2>
      <iframe
        width="280"
        height="200"
        src="https://www.youtube.com/embed/XMa4hcYOBp8"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="280"
        height="200"
        src="https://www.youtube.com/embed/PcMs2qW7Ebk"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
