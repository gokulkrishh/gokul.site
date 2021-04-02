import React from "react";

import LinkImg from "components/LinkImg";

const videoLinks = [
  {
    title: "Datatypes in Javascript | Episode 1",
    link: "https://www.youtube.com/watch?v=PcMs2qW7Ebk",
    image: "https://img.youtube.com/vi/PcMs2qW7Ebk/0.jpg",
  },
  {
    title: "Comments and Variables in Javascript | Episode 2",
    link: "https://www.youtube.com/watch?v=XMa4hcYOBp8",
    image: "https://img.youtube.com/vi/XMa4hcYOBp8/0.jpg",
  },
  {
    title: "Comments and Variables in Javascript | Episode 3",
    link: "https://www.youtube.com/watch?v=zTl-pXoMmx0",
    image: "https://img.youtube.com/vi/zTl-pXoMmx0/0.jpg",
  },
];

const Videos = () => {
  return (
    <div className="videos">
      <h2>I do videos on youtube</h2>
      <div className="cards">
        {videoLinks.map((video) => {
          return (
            <a
              href={video.link}
              className="link"
              target="_blank"
              rel="noreferrer"
              key={video.title}
            >
              <div className="card">
                <LinkImg />
                <img src={video.image} alt={video.title} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
