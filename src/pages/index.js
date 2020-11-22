import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import get from "lodash/get";

import Newsletter from "../components/Newsletter";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Footer from "../components/Footer";
import SEO from "../../seo";
import bannerImg from "../components/banner.png";

export default class index extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const siteDesc = `Hi, I am Gokul. I am a Web Developer and GDE for the web. Come check out how I share my learnings and knowledge.`;
    const posts = get(this, "props.data.allMarkdownRemark.group");
    const sortPostByYear = {};
    posts.forEach((post) => {
      const year = post.fieldValue.split("-")[0];
      if (!sortPostByYear[year])
        sortPostByYear[year] = [{ node: post.edges[0].node }];
      else {
        sortPostByYear[year].push({ node: post.edges[0].node });
      }
    });

    return (
      <Layout>
        <SEO title={siteTitle} description={siteDesc} image={bannerImg} />
        <Helmet>
          <title>{siteTitle}</title>
        </Helmet>
        <Header />
        <div className="grid">
          <Bio />
          <hr />
          <div className="posts">
            <h2 className="posts__title">All Posts</h2>
            {Object.keys(sortPostByYear)
              .reverse()
              .map((year, index) => {
                const postsByYear = sortPostByYear[year];
                return (
                  <div className="post__year" key={index}>
                    {postsByYear.reverse().map(({ node }, index) => {
                      const title =
                        get(node, "frontmatter.title") || node.fields.slug;
                      const link =
                        title === "Tools I use for web development"
                          ? "/uses"
                          : `blog${node.fields.slug}`;
                      return (
                        <div className="post" key={index}>
                          <h4>
                            <Link to={link}>{title}</Link>
                          </h4>
                          <time>
                            {node.frontmatter.date} {year}
                          </time>
                          <p
                            dangerouslySetInnerHTML={{ __html: node.excerpt }}
                          />
                          <Link to={link}>Continue Reading »</Link>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            <Newsletter />
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___date) {
        fieldValue
        edges {
          node {
            excerpt(pruneLength: 200)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD MMMM")
              title
            }
          }
        }
      }
    }
  }
`;
