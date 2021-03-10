import React from "react";

import LinkImg from "components/LinkImg";
import DotfilesPng from "images/dotfiles.png";
import AwesomeSvg from "images/awesome.svg";
import QRCodeScannerPng from "images/qr-code-scanner.png";

const Projects = () => {
  return (
    <>
      <h2>Side projects</h2>
      <div className="posts pet-projects">
        <a
          href={"https://qrcodescan.in"}
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <div className="post post-bg-placeholder qr-code-scanner">
            <img src={QRCodeScannerPng} alt="QR Code Scanner logo" />
            <LinkImg />
            <h3>QR Code Scanner</h3>
            <p>
              QR Code Scanner is a progressive web application. This qr code
              scanner is super fast and user-friendly web application.
            </p>
          </div>
        </a>
        <a
          href="https://github.com/gokulkrishh/dotfiles"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <div className="post post-bg-placeholder dotfiles">
            <img src={DotfilesPng} alt="Dofiles logo" />
            <LinkImg />
            <h3>Dofiles</h3>
            <p>
              Know what tools and plugins I use for day to day web development.
              Has lots shortcuts and good stuff.
            </p>
          </div>
        </a>
        <a
          href="https://github.com/gokulkrishh/awesome-meta-and-manifest"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          <div className="post post-bg-placeholder awesome-manifest">
            <img src={AwesomeSvg} alt="Awesome logo" />
            <LinkImg />
            <h3>Awesome Meta Tags & Manifest Properties</h3>
            <p>
              Awesome collection of meta tags & manifest properties that you can
              use on your web application.
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Projects;
