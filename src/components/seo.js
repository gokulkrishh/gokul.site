import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO(props) {
  const {
    description,
    lang,
    meta,
    slug = "",
    year = "",
    title,
    twitterUsername,
    className = "",
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
  const metaTitle = title || site.siteMetadata.title;
  const metaUrl = (slug || "").replace(/\/blog/g, "");

  return (
    <Helmet
      bodyAttributes={{
        class: `${className ? className : ""}`,
      }}
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
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
          content: metaUrl === "" ? `summary` : `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: slug
            ? `${site.siteMetadata.siteUrl}${
                metaUrl === "/uses" ? "/" + year + metaUrl : metaUrl
              }/twitter-card.jpg`
            : `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`,
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
