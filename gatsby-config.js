module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Gokulakrishnan Kalaikovan`,
    siteUrl: `https://gokul.site`,
    description: `Hi, I am Gokul. I am a Web Developer and Google Developer Expert for the web. Come check out how I share my learnings and knowledge via my site.`,
    author: `@gokulkrishh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts/`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Gokulakrishnan Kalaikovan",
        short_name: "Gokul's - Blog",
        start_url: "/",
        background_color: "#212121",
        theme_color: "#212121",
        display: "minimal-ui",
        icon: "images/icons/android-chrome-512x512.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato\:300,400,500`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-54513398-1`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-dark-mode`,
  ],
};
