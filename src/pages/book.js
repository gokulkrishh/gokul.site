import React from "react";

import Footer from "../components/footer";
import Layout from "../components/layout";
import Menu from "../components/menu";
import Newsletter from "../components/newsletter";

import samplePdf from "../images/beginners-guide-to-web-security-sample.pdf";
import bookImage from "../images/book.png";

import "../styles/book.css";

const Book = () => {
  return (
    <div className="grid">
      <Menu />
      <Layout>
        <section className="book-header">
          <div className="container">
            <span className="title-tag">Order Now</span>

            <h2>Beginner's Guide To Web Security</h2>
            <p>In this book, you will learn the following.</p>

            <ul>
              <li>How Web Works?</li>
              <li>TCP/IP Model</li>
              <li>HTTP, HTTPS, Various types of HTTPS certificates</li>
              <li>What is Secure Software Development Lifecycle (SSDLC)?</li>
              <li>What is OWASP?</li>
              <li>OWASP Top 10 Vulnerabilities</li>
              <li>Various types of web vulnerabilities</li>
              <li>How to prevent from web vulnerabilities</li>
              <li>How to fix the web vulnerabilities</li>
            </ul>
            <p>
              At the end of this book has tools, libraries and web security
              checklist to get started.
            </p>

            <div className="header-actions">
              <a className="gumroad-button" href="https://gum.co/IrcpA">
                Buy for <del>$15</del> $10
              </a>
              or{""}
              <a className="download" href={samplePdf} download>
                Download a free chapter
              </a>
            </div>
          </div>

          <img src={bookImage} alt=" Beginner's guide to web security cover" />
        </section>
        <section className="learn-section">
          <div className="container">
            <h2>What you'll learn</h2>
            <ul>
              <li>
                <b>How does the web work?</b>
              </li>
              <ul>
                <li>Behind the hood</li>
                <li>TCP/IP Model</li>
                <li>HTTP & HTTPS Protocol</li>
              </ul>
              <li>
                <b>What is Web Security?</b>
              </li>
              <li>
                <b>Open Web Application Security Project (OWASP)</b>
              </li>
              <li>
                <b>Web Security Vulnerabilities & Its Types</b>
                <ul>
                  <li>Types of web security attacks</li>
                  <li> Brute Force Attack </li>
                  <li> Clickjacking</li>
                  <li>Content Security Policy (CSP) </li>
                  <li>Cross Site Request Forgery (CSRF) </li>
                  <li>Cross Origin Request Sharing (CORS) </li>
                  <li>Cross Site Scripting (XSS) </li>
                  <li>Code Injection </li>
                  <li>Denial of service (DOS) </li>
                  <li>Open Redirect Attack </li>
                  <li>Javascript & 3rd Party Library Vulnerabilities </li>
                  <li>Phishing Attacks </li>
                  <li>Web Sockets Vulnerabilities</li>
                </ul>
              </li>
              <li>
                <b>Security Tools & Libraries</b>
              </li>
              <li>
                <b>Web Security Checklist</b>
              </li>
            </ul>
            <p>
              View the full{" "}
              <a href={samplePdf} target="_blank" rel="noreferrer">
                table of contents
              </a>
            </p>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-questions">
              <div>
                <h3>Who designed the cover?</h3>
                <p>
                  The design was done by{" "}
                  <a
                    href="https://twitter.com/align_all"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ranjith Ramanan
                  </a>
                  .
                </p>
              </div>
              <div>
                <h3>Can I get a student discount?</h3>
                <p>
                  Yes, of course.{" "}
                  <a
                    href="https://twitter.com/messages/compose?recipient_id=515540454"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span />
                    DM
                  </a>{" "}
                  me in twitter.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3>I have a feedback or question?</h3>
                <p>
                  Tweet me{" "}
                  <a
                    href="https://twitter.com/gokul_i"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @gokul_i
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://twitter.com/messages/compose?recipient_id=515540454"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span />
                    DM
                  </a>{" "}
                  me in twitter.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Book;
