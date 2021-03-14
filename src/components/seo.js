import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO(props) {
  const {
    description,
    lang,
    meta,
    slug,
    title,
    twitterUsername,
    image,
  } = props;

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            siteUrl
            title
            author
            twitterUsername
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title || title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title || title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: twitterUsername,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.title || title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: slug
            ? `${site.siteMetadata.siteUrl}/${slug}/twitter-card.jpg`
            : site.siteMetadata.image,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
