import React from "react";

import profilePic from "./profile-pic.jpg";
import Github from "./github.svg";
import Twitter from "./twitter.svg";
import Youtube from "./youtube.svg";

export default class Bio extends React.Component {
  render() {
    return (
      <div className="about">
        <img
          className="avatar"
          src={profilePic}
          alt="Gokulakrishnan Kalaikovan"
        />
        <div>
          <h1>Hi, I'm Gokul 👋</h1>
          <p>
            I'm a web developer and{" "}
            <a
              href="https://developers.google.com/community/experts/directory/profile/profile-gokulakrishnan_kalaikovan"
              target="_blank"
            >
              Google Developer Expert (GDE)
            </a>{" "}
            in India. Besides coding, I like gaming, running, football,
            travelling and finally an <a href="/book">author</a>.
          </p>
          <div className="social">
            <a
              className="twitter"
              href="https://twitter.com/gokul_i"
              target="_blank"
            >
              <img src={Twitter} alt="Twitter" /> Twitter
            </a>
            <a
              className="github"
              href="https://github.com/gokulkrishh"
              target="_blank"
            >
              <img src={Github} alt="Github" /> Github
            </a>
            <a
              className="youtube"
              href="https://www.youtube.com/channel/UCQuGo1upeBPLH8RNVidUCVg"
              target="_blank"
            >
              <img src={Youtube} alt="Github" /> Youtube
            </a>
          </div>
        </div>
        <picture></picture>
      </div>
    );
  }
}
