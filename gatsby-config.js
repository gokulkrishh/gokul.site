const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Gokulakrishnan Kalaikovan",
    siteUrl: "https://gokul.site",
    description:
      "Hi, I am Gokul. I am a Web Developer and Google Developer Expert for the web. Come check out how I share my learnings and knowledge via my site.",
    author: "@gokulkrishh",
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-54513398-1",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gokul's Blog`,
        short_name: `Gokul`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#1b1b1b`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/icon.png`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/blog`,
      },
      __key: "blog",
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: "blog-post-heading-link",
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: true,
              elements: ["h1", "h2", "h3"],
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              numberLines: true,
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 700,
            },
          },
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    "gatsby-remark-reading-time",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`Inter\:300,400,600,700`],
      },
    },
    "gatsby-plugin-remove-trailing-slashes",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        styles: path.join(__dirname, "src/styles"),
        images: path.join(__dirname, "src/images"),
        components: path.join(__dirname, "src/components"),
      },
    },
  ],
};
