import React from "react";

import LinkImg from "./LinkImg";

const Bio = () => {
  return (
    <div className="header-content">
      <h1 className="title">
        Hi! I'm Gokul, a Web Developer & Google Developer Expert (GDE) from
        India.
      </h1>
      <p>
        Besides coding, I like playing games, running, football, travelling and
        an author.
      </p>
      <p>
        I'm currently working at ThoughtWorks, and previously worked at Ephicacy
        Lifescience Analytics.
      </p>
      <div className="social">
        <a
          className="youtube"
          href="https://www.youtube.com/c/GokulKalaikoven"
          target="_blank"
          rel="noreferrer"
        >
          Youtube
          <LinkImg />
        </a>
        <a
          className="twitter"
          href="https://twitter.com/gokul_i"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
          <LinkImg />
        </a>
        <a
          className="github"
          href="https://github.com/gokulkrishh"
          target="_blank"
          rel="noreferrer"
        >
          Github
          <LinkImg />
        </a>
      </div>
    </div>
  );
};

export default Bio;
