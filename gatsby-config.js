const globImporter = require("node-sass-glob-importer")

module.exports = {
	siteMetadata: {
		title: `👨🏻‍💻 Gokulakrishnan Kalaikovan`,
		siteUrl: `https://gokul.site`,
		description: `Web Dev & GDE for web`,
		author: `@gokulkrishh`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gokul.site`,
				short_name: `gokul.site`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				importer: globImporter(),
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
	],
}
