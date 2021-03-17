import React from "react";
import { graphql } from "gatsby";

import Footer from "components/footer";
import Layout from "components/layout";
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
            const tags = frontmatter?.tags || [];
            const link = relative
              ? fields.slug.split("/")[2]
              : `/blog${fields.slug}`;
            return (
              <a href={link} className="card link" key={title}>
                <div className="post">
                  <h3>{title}</h3>
                  <time>{date}</time>
                  <p>{excerpt}</p>
                  {/* <p className="tags">
                    {tags.map((tag) => (
                      <span key={title + tag} className={tag}>
                        {tag}
                      </span>
                    ))}
                  </p> */}
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