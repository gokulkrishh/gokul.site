import React from "react";
import { graphql } from "gatsby";
import { DiscussionEmbed } from "disqus-react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import bannerImg from "../components/banner.png";
import SEO from "../../seo";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const disqusShortname = "gokulkrishh";
  const disqusConfig = {
    identifier: frontmatter.id,
    title: frontmatter.title,
  };

  return (
    <Layout>
      <Header />
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || ""}
        image={bannerImg}
      />
      <div className="grid">
        <div className="blog-post-container">
          <div className="blog-post">
            <h1 className="title">{frontmatter.title}</h1>
            <time>{frontmatter.date} </time>
            {frontmatter.readtime ? (
              <time>&middot; {frontmatter.readtime}</time>
            ) : null}
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <Newsletter />
          </div>

          <div className="discuss-container">
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
        <Bio />
      </div>
      <Footer />
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        readtime
        description
      }
    }
  }
`;
