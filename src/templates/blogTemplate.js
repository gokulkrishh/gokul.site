import React from "react";
import { graphql } from "gatsby";

import Layout from "components/Layout";
import Menu from "components/menu";
import Footer from "components/Footer";
import Newsletter from "components/newsletter";
import Seo from "components/seo";

import "styles/blog-post.css";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html, fields } = markdownRemark;
  const { readingTime } = fields;

  return (
    <div className="grid">
      <Menu />
      <Layout customSEO={true}>
        <Seo
          title={frontmatter.title}
          description={frontmatter.description || ""}
          slug={frontmatter.slug}
          year={(frontmatter.date || "").split(", ")[1]}
        />
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <div className="blog-post-details">
            <p>
              Published at
              <time>{frontmatter.date}</time>
            </p>
            {frontmatter.updated && (
              <p>
                Updated at
                <time>{frontmatter.updated}</time>
              </p>
            )}
            <p>
              Reading time
              <time>{readingTime.text.replace(/read/g, "")}</time>
            </p>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
      <Newsletter />
      <Footer />
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        updated(formatString: "MMM DD, YYYY")
        slug
        title
        description
        relative
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
