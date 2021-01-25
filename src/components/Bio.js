import React from "react";

import profilePic from "./profile-pic.jpg";
import Github from "./github.svg";
import Twitter from "./twitter.svg";
import Youtube from "./youtube.svg";

export default class Bio extends React.Component {
  render() {
    return (
      <div className="about">
        <div
          className="avatar"
          alt="Gokulakrishnan Kalaikovan"
        />
        <div>
          <p>
            Gokul is a <b>Web Developer</b> & <b>Google Developer Expert (GDE)</b>{" "}
            in India. Besides coding, I like gaming, running, football,
            travelling and an <a href="/book">author</a>.
          </p>

          <p>He is currently working at ThoughtWorks, and previously worked at Ephicacy Lifescience Analytics.</p>
          <div className="social">
            <a
              className="youtube"
              href="https://www.youtube.com/channel/GokulKalaikoven"
              target="_blank"
            >
              Youtube
            </a>
            <a
              className="twitter"
              href="https://twitter.com/gokul_i"
              target="_blank"
            >
              Twitter
            </a>
            <a
              className="github"
              href="https://github.com/gokulkrishh"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <picture></picture>
      </div>
    );
  }
}
