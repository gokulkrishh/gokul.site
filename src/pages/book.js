import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import bookImage from "../images/book-cover.png";
import samplePdf from "../images/(Sample)-Beginners guide to web security.pdf";
import authorImg from "../components/profile-pic.jpg";
import githubImg from "../components/github.svg";
import twitterImg from "../components/twitter.svg";

export default props => {
	return (
		<div className="book">
			<Layout>
				<Helmet>
					<title>Gokulakrishnan Kalaikovan | Book</title>
				</Helmet>
				<section className="header-section">
					<div className="container">
						<span className="title-tag">pre-order started</span>

						<h1>
							Beginner's guide <br></br>to web security
						</h1>
						<p>In this book, you will learn the following.</p>

						<ul>
							<li>How Web Works?</li>
							<li>What is Secure Software Development Lifecycle (SSDLC)?</li>
							<li>What is OWASP?</li>
							<li>OWASP Top 10 Vulnerabilities</li>
							<li>Various types of web vulnerabilities</li>
							<li>Security Tools & Libraries</li>
							<li>Web Security Checklist</li>
						</ul>
						<p>
							At the end of this book has tools and web security checklist to
							getting started with web security.
						</p>

						<div className="header-actions">
							<button>Pre-order now</button>
							or{" "}
							<a href={samplePdf} download>
								{" "}
								Download a free chapter
							</a>
						</div>
					</div>

					<img src={bookImage} alt=" Beginner's guide to web security cover" />
				</section>

				<section className="learn-section">
					<div className="container">
						<h2>What you'll learn</h2>
						<ul>
							<li>How does the web work?</li>
							<ul>
								<li>Behind the hood</li>
								<li>TCP/IP Model</li>
								<li>HTTP & HTTPS Protocol</li>
							</ul>
							<li>What is Web Security?</li>
							<ul>
								<li>Types of web security attacks</li>
							</ul>
							<li>Open Web Application Security Project (OWASP)</li>
							<li>Web Security Vulnerabilities & Its Types</li>
							<li>Security Tools & Libraries</li>
							<li>Web Security Checklist</li>
						</ul>
						<p>
							View the full{" "}
							<a href={samplePdf} target="_blank" rel="noreferrer">
								table of contents
							</a>
						</p>
					</div>
				</section>

				<section className="author-section">
					<div className="container">
						<h2>About the author</h2>
						<div className="content">
							<div>
								<img
									className="avatar"
									src={authorImg}
									alt="Gokulakrishnan Kalaikovan | Author"
								/>
							</div>
							<div>
								<h3>
									Hi, I'm Gokul{" "}
									<span role="img" aria-label="hi">
										👋
									</span>{" "}
								</h3>
								<p>
									<span role="img" aria-label="what i do">
										Gokul is a
									</span>{" "}
									Web Developer &{" "}
									<a
										href="https://developers.google.com/community/experts/directory/profile/profile-gokulakrishnan_kalaikovan"
										target="_blank"
										rel="noreferrer"
									>
										Google Developer Expert
									</a>{" "}
									for web, based in India. He is currently working at{" "}
									<a
										href="http://thoughtworks.com/"
										target="_blank"
										rel="noreferrer"
									>
										ThoughtWorks
									</a>
									.{" "}
									<p>
										He is an open source contributor, public speaker, maintains
										and curate's two newsletters{" "}
										<a
											href="https://www.this-week-in-web.com/"
											target="_blank"
											rel="noreferrer"
										>
											this week in web
										</a>{" "}
										and{" "}
										<a
											href="https://how-it-works.dev/"
											target="_blank"
											rel="noreferrer"
										>
											how it works
										</a>{" "}
										- javascript series. As of now, Gokul is continuing his
										passion towards web development and helping the fellow web
										developer's.
									</p>
									<a
										href="https://twitter.com/gokul_i"
										target="_blank"
										rel="noreferrer"
										title="Twitter"
										className="twitter"
									>
										<img src={twitterImg} alt="twitter account" />
									</a>
									<a
										href="https://github.com/gokulkrishh"
										target="_blank"
										rel="noreferrer"
										title="Github"
										className="github"
									>
										<img src={githubImg} alt="github account" />
									</a>
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="faq-section">
					<div className="container">
						<h2>Frequently asked questions</h2>
						<div>
							<h3>Who is this book for?</h3>
							<p>
								The primary target audience for this book is beginners to mid
								level web or UI developers or anybody who wants to learn web
								security related topics and tips.
							</p>
							<h3>Is there a refund policy?</h3>
							<p>
								Yes, if you didn't like the book 😭 then yeah, its 100%
								refundable via gumroad (only within 30 days of purchase).
							</p>
							<h3>I have some questions or want to report a correction?</h3>
							<p>
								Tweet me{" "}
								<a
									href="https://twitter.com/gokul_i"
									target="_blank"
									rel="noreferrer"
								>
									@gokul_i
								</a>{" "}
								or{" "}
								<a
									href="https://twitter.com/messages/compose?recipient_id=515540454"
									target="_blank"
									rel="noreferrer"
								>
									<span />
									DM
								</a>{" "}
								me in twitter.
							</p>
						</div>
					</div>
				</section>
				<footer>
					<div className="container">
						© {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.org">Gatsby</a> &middot; Site is
						inspired from
						<a
							href="http://theworldsgreatestbook.com/perfect-book-sales-page/"
							target="_blank"
							rel="noreferrer"
						>
							Perfect Book Sales
						</a>
					</div>
				</footer>
			</Layout>
		</div>
	);
};
