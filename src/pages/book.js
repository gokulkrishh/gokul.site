import React from "react";
import Helmet from "react-helmet";

import SEO from "../../seo";
import Bio from "../components/Bio";
import Newsletter from "../components/Newsletter";
import Layout from "../components/Layout";
import bookImage from "../images/book-cover.jpg";
import samplePdf from "../images/beginners-guide-to-web-security-sample.pdf";
import Header from "../components/Header";

export default (props) => {
  return (
    <div className="book">
      <Layout>
        <SEO
          title="Beginner's Guide To Web Security"
          description="A 100+ page ebook that talks about the basics of web security, various types of web security attacks and how to avoid/fix them."
        />
        <Helmet>
          <title>
            Gokulakrishnan Kalaikovan | Book | Beginner's Guide To Web Security
          </title>
        </Helmet>
        <Header />
        <section className="header-section">
          <div className="container">
            <span className="title-tag">Buy now to get 50% off</span>

            <h2>
              Beginner's Guide <br></br>To Web Security
            </h2>
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
              checklist to getting started on the web security.
            </p>

            <div className="header-actions">
              <a className="gumroad-button" href="https://gum.co/IrcpA">
                Buy on gumroad
              </a>
              or{""}
              <a className="download" href={samplePdf} download>
                Download a free chapter
              </a>
            </div>
            <p>
              Use this discount code "<span>LOVETHISBOOK</span>" to get 50% off
              the original price.
            </p>
          </div>

          <img src={bookImage} alt=" Beginner's guide to web security cover" />
        </section>
        <section className="learn-section">
          <div className="container">
            <h3>What you'll learn</h3>
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
        <section className="author-section">
          <div className="container">
            <h3>About the author</h3>
            <div className="content">
              <Bio />
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-questions">
              <div>
                <h4>Who designed the cover?</h4>
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
                <h4>Can I get a student discount?</h4>
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
                <h4>I have a feedback or question?</h4>
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
        <section className="author-section">
          <div className="container">
            <h3>Keep yourself updated</h3>
            <br />
            <Newsletter />
          </div>
        </section>
        <footer>
          <div className="container">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> &middot; Site is
            inspired from
            <a
              href="http://theworldsgreatestbook.com/perfect-book-sales-page/"
              target="_blank"
              rel="noreferrer"
            >
              Perfect Book Sales
            </a>
          </div>
        </footer>
      </Layout>
    </div>
  );
};
