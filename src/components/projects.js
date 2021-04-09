import React from "react";

import LinkImg from "components/LinkImg";
import DotfilesPng from "images/dotfiles.png";
import CommandLineSVG from "images/command-line.svg";
import QRCodeScannerPng from "images/qr-code-scanner.png";

const projectList = [
  {
    title: "QR Code Scanner",
    image: QRCodeScannerPng,
    desc: `QR Code Scanner is a progressive web application. This qr code scanner is super fast and user-friendly web application.`,
    link: "https://qrcodescan.in",
  },
  {
    title: "Dofiles",
    image: DotfilesPng,
    desc: `Know what tools and plugins I use for day to day web development. This project has lots of shortcuts and good stuff.`,
    link: "https://github.com/gokulkrishh/dotfiles",
  },
  {
    title: "set-default-browser",
    image: CommandLineSVG,
    desc: `Set any macOS browser as your default browser via command line.`,
    link: "https://github.com/gokulkrishh/set-default-browser",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>Side projects</h2>
      <div className="cards">
        {projectList.map((project) => {
          return (
            <a
              href={project.link}
              className="link"
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <div className="card">
                <img src={project.image} alt="logo" />
                <LinkImg />
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
