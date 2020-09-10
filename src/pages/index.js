import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import get from "lodash/get";

import Newsletter from "../components/Newsletter";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Footer from "../components/Footer";

export default class index extends React.Component {
	render() {
		const siteTitle = get(this, "props.data.site.siteMetadata.title");
		const posts = get(this, "props.data.allMarkdownRemark.group");
		const sortPostByYear = {};
		posts.forEach(post => {
			const year = post.fieldValue.split("-")[0];
			if (!sortPostByYear[year])
				sortPostByYear[year] = [{ node: post.edges[0].node }];
			else {
				sortPostByYear[year].push({ node: post.edges[0].node });
			}
		});

		return (
			<Layout>
				<Helmet>
					<title>{siteTitle}</title>
				</Helmet>
				<Header />
				<div className="grid">
					<Bio />
					<div className="posts">
						{Object.keys(sortPostByYear)
							.reverse()
							.map(year => {
								const postsByYear = sortPostByYear[year];
								return (
									<div className="post__year" key={postsByYear}>
										<h2>{year}</h2>
										{postsByYear.reverse().map(({ node }) => {
											const title =
												get(node, "frontmatter.title") || node.fields.slug;
											const link =
												title === "Tools I use for web development"
													? "/uses"
													: `blog${node.fields.slug}`;
											return (
												<div className="post" key={node.fields.slug}>
													<h3>
														<Link to={link}>{title}</Link>
													</h3>
													<time>{node.frontmatter.date}</time>
													<p
														dangerouslySetInnerHTML={{ __html: node.excerpt }}
													/>
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
