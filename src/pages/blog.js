import React from "react";
import { graphql } from "gatsby";

import Footer from "components/Footer";
import Layout from "components/Layout";
import Newsletter from "components/newsletter";
import Menu from "components/menu";

import "styles/index.css";
import "styles/libraries.css";

const Blog = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { edges: posts } = allMarkdownRemark;
  return (
    <div className="grid">
      <Menu />
      <Layout>
        <h2>All Posts</h2>
        <div className="cards posts all-posts">
          {posts.map(({ node }) => {
            const { frontmatter, excerpt, fields } = node;
            const { title, date, relative } = frontmatter;
            const { slug, readingTime } = fields;
            const link = relative ? slug.split("/")[2] : `/blog${slug}`;
            return (
              <a href={link} className="card link" key={title}>
                <div className="post">
                  <h3>{title}</h3>
                  <time>{date}</time>
                  <span className="dot"> • </span>
                  <time>{readingTime.text}</time>
                  <p>{excerpt}</p>
                </div>
              </a>
            );
          })}
        </div>
      </Layout>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;

export const postQuery = graphql`
  query postQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___tags] }
    ) {
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt(pruneLength: 160)
          frontmatter {
            date(formatString: "DD MMM, YYYY")
            title
            tags
            relative
          }
        }
      }
    }
  }
`;
