import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Menu from '../components/menu';
import Footer from '../components/footer';

import '../styles/blog-post.css';
import Newsletter from '../components/newsletter';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html, fields } = markdownRemark;
  const { readingTime } = fields;
  return (
    <div className="grid">
      <Menu />
      <Layout>
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
              <time>{readingTime.text.replace(/read/g, '')}</time>
            </p>
          </div>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
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
