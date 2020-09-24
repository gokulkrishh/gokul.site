import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import twitterImg from "./src/images/twitter-image.jpg";

const SEO = ({ title, description, image = "", siteUrl, article }) => {
	const { pathname } = useLocation();

	const seo = {
		title: title,
		description: description,
		image: image || twitterImg,
		url: `${siteUrl}${pathname}`
	};

	const twitterUsername = "@gokul_i";

	return (
		<Helmet title={seo.title} titleTemplate={title.title}>
			{seo.url && <meta property="og:url" content={seo.url} />}
			<meta
				name="google-site-verification"
				content="LUCSlyRKbS1ghLwiAi-5Yu8FtI2rlQ4tpgYpXF0z_q4"
			/>

			{(article ? true : null) && <meta property="og:type" content="article" />}

			{seo.title && <meta property="og:title" content={seo.title} />}

			{seo.description && (
				<meta property="og:description" content={seo.description} />
			)}

			{seo.image && <meta property="og:image" content={seo.image} />}

			<meta name="twitter:card" content="summary_large_image" />

			{twitterUsername && (
				<meta name="twitter:creator" content={twitterUsername} />
			)}

			{seo.title && <meta name="twitter:title" content={seo.title} />}

			{seo.description && (
				<meta name="twitter:description" content={seo.description} />
			)}

			{seo.image && <meta name="twitter:image" content={seo.image} />}
		</Helmet>
	);
};

export default SEO;

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	article: PropTypes.bool
};

SEO.defaultProps = {
	title: null,
	description: null,
	image: null,
	siteUrl: "https://gokul.site",
	article: false
};
