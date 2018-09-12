import React from "react";
import Helmet from "react-helmet"

import Layout from "../components/Layout";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Footer from "../components/Footer";

export default () => (
  <Layout>
    <Helmet>
      <title>Gokulakrishnan Kalaikovan | About</title>
    </Helmet>
    <Header />
    <div className="grid">
      <Bio />
      <div className="about-me">
        <h1>About</h1>
        <ul>
          <li>
            I currently work as <b>Senior Consultant</b> at <b>ThoughtWorks</b> in
            <b>India, Bangalore</b>.
          </li>
          <li>
            <a
              href="https://developers.google.com/experts/people/gokulakrishnan-kalaikovan.html"
              target="_blank"
            >
              Google Developer Expert
            </a>
            for Web Technologies.
          </li>
          <li>An open source contributor and tech enthusiasts.</li>
          <li>
            Curator of
            <a
              title="Progressive Web Application"
              href="https://pwa.tips"
              target="_blank"
            >
              pwa.tips
            </a>
            . Monthly newsletter for pwa, browser updates etc,.
          </li>
          <li>
            My recent works & open sourced apps are
            <a href="/opensources">here</a>.
          </li>
        </ul>

        <h2>Talks</h2>
        <ul>
          <li>
            <span>21 July 2018</span> &raquo;
            <a href="#">State of the Web in 2018, Bangalore</a>
          </li>
          <li>
            <span>14 Oct 2017</span> &raquo;
            <a
              href="https://docs.google.com/presentation/d/1XiUHf4YErRX0tJd5PEEBrr4qHzKPM3mr-fFIRdyb8pQ/edit?usp=sharing"
              target="_blank"
            >
              Do's and Don'ts in Progressive Web Applications - Solve for India,
              Chennai
            </a>
          </li>
          <li>
            <span>28 Apr 2017</span> &raquo;
            <a href="https://pwa.tips/codelabs" target="_blank">
              Progressive Web Application - Google Developers Roadshow, Pune
            </a>
          </li>
          <li>
            <span>23 Jan 2017</span> &raquo;
            <a
              href="https://docs.google.com/presentation/d/1OixGz72qcJOpb3NC2BDINOHB_7PGp5LsrmyrXsDXDp4/edit?usp=sharing"
              target="_blank"
            >
              ReactJS and Create-React-App
            </a>
          </li>
          <li>
            <span>21 Nov 2016</span> &raquo;
            <a
              href="https://docs.google.com/presentation/d/1COtqAkSMDiz6avZ-_olqFR66ooLVpHE9folNQCji7r0/edit?usp=sharing"
              target="_blank"
            >
              Progressive Web Application, Bangalore
            </a>
          </li>
          <li>
            <span>22 Nov 2016</span> &raquo;
            <a
              href="https://docs.google.com/presentation/d/1lBTU4_haLt6MT68F-Aw-kRkkaSMaFCS7KlgYmYCEQsE/edit?usp=sharing"
              target="_blank"
            >
              Angular 2 Introduction, Bangalore
            </a>
          </li>
          <li>
            <span>22 Oct 2016</span> &raquo;
            <a href="https://github.com/code-kotis/pwa-codelabs">
              PWA Codelabs Google DevFest, Bangalore
            </a>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </Layout>
);
