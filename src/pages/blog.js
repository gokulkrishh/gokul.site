import React from "react";
import { graphql } from "gatsby";

import Footer from "src/components/footer";
import Layout from "src/components/layout";
import Newsletter from "src/components/newsletter";
import LinkImg from "src/components/LinkImg";
import Menu from "src/components/menu";

import "src/styles/index.css";
import "src/styles/libraries.css";

const Blog = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { edges: posts } = allMarkdownRemark;
  return (
    <div className="grid">
      <Menu />
      <Layout>
        <h2>All Posts</h2>
        <div className="posts all-posts">
          {posts.map(({ node }) => {
            const { frontmatter, excerpt, fields } = node;
            const { title, date, relative } = frontmatter;
            const link = relative
              ? fields.slug.split("/")[2]
              : `blog${fields.slug}`;
            return (
              <a href={link} className="link" key={title}>
                <div className="post">
                  <LinkImg />
                  <h3>{title}</h3>
                  <time>{date}</time>
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 180)
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
