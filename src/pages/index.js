import React from "react";
import { Link, graphql } from "gatsby";

import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import Newsletter from "../components/newsletter";

import LinkImg from "../components/LinkImg";
import DotfilesPng from "../images/dotfiles.png";
import AwesomeSvg from "../images/awesome.svg";
import QRCodeScannerPng from "../images/qr-code-scanner.png";

import "../styles/index.css";
import "../styles/libraries.css";

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { edges: posts } = allMarkdownRemark;
  return (
    <div className="grid">
      <Header />
      <Layout>
        <h2>Popular posts</h2>
        <div className="posts">
          {posts.slice(0, 3).map(({ node }) => {
            const { frontmatter, excerpt, fields } = node;
            const { title, date, relative } = frontmatter;
            const link = relative
              ? `/${fields.slug.split("/")[2]}`
              : `blog${fields.slug}`;
            return (
              <Link to={link} className="link" key={title}>
                <div className="post">
                  <h3>{title}</h3>
                  <time>{date}</time>
                  <p>{excerpt}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <h2>Pet projects</h2>
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
                Know what tools and plugins I use for day to day web
                development. Has lots shortcuts and good stuff.
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
                Awesome collection of meta tags & manifest properties that you
                can use on your web application.
              </p>
            </div>
          </a>
        </div>
      </Layout>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "DD MMM, YYYY")
            title
            relative
          }
        }
      }
    }
  }
`;
