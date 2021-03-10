import React from "react";
import { Link, graphql } from "gatsby";

import Footer from "components/footer";
import Header from "components/header";
import Layout from "components/layout";
import Newsletter from "components/newsletter";
import Projects from "components/projects";

import "styles/index.css";
import "styles/libraries.css";

const IndexPage = ({ data, ...props }) => {
  const { allMarkdownRemark } = data;
  const { edges: posts } = allMarkdownRemark;
  return (
    <div className="grid">
      <Header />
      <Layout>
        <h2>Recent posts</h2>
        <div className="posts">
          {posts.slice(0, 3).map(({ node }) => {
            const { frontmatter, excerpt, fields } = node;
            const { title, date, relative } = frontmatter;
            const tags = frontmatter?.tags || [];
            const link = relative
              ? `/${fields.slug.split("/")[2]}`
              : `blog${fields.slug}`;
            return (
              <Link to={link} className="link" key={title}>
                <div className="post">
                  <h3>{title}</h3>
                  <time>{date}</time>
                  <p>{excerpt}</p>
                  {/* <p className="tags">
                    {tags.map((tag) => (
                      <span className={tag}>{tag}</span>
                    ))}
                  </p> */}
                </div>
              </Link>
            );
          })}
        </div>
        <Projects />
      </Layout>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___tags] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "DD MMM, YYYY")
            tags
            title
            relative
          }
        }
      }
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;
