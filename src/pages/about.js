import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import SEO from "../../seo";
import bannerImg from "../components/banner.png";

export default props => {
	const siteTitle = "Gokulakrishnan Kalaikovan";
	const siteDesc = `Hi, I am Gokul. I am a Web Developer and GDE for the web. Come check out how I share my learnings and knowledge.`;
	return (
		<Layout>
			<SEO title={siteTitle} description={siteDesc} image={bannerImg} />
			<Helmet>
				<title>Gokulakrishnan Kalaikovan | About</title>
			</Helmet>
			<Header />
			<div className="grid">
				{/* <Bio /> */}
				<div className="about-me">
					<h2>Hi, I'm Gokul 👋</h2>
					<p>
						I'm glad that you made this far to my website. Now let's talk about
						me. I started my career as a self-taught Web Developer by learning HTML,
						CSS, javascript & PHP. After a few months, I got a chance to work on
						a Javascript framework (Angular v1.5) and later few months down the line, I started working on
						other javascript frameworks like ember, backbone, kendo ui,
						knockoutjs etc, in different projects. In the beginning of my career only, I understood
						that I liked working on the web a lot.
					</p>
					<p>
						So I started following my passion and curiosity in the open web,
						focusing on improving my skills as a web developer. Before even I
						realized I became an expert in what I was doing and got nominated
						for Google Developer Expert (GDE). After two round of discussions with a
						googler and an existing GDE and a few months of waiting, I became a
						<a
							href="https://developers.google.com/community/experts/directory/profile/profile-gokulakrishnan_kalaikovan"
							target="_blank"
						>
							Google Developer Expert
						</a>{" "}
						for Web Technologies.
					</p>
					<p>
						As of now, I am continuing my passion towards the web and improving
						the web by building tools and helping other fellow web developers.
						Besides coding, I like gaming (COD mobile mostly these days),
						running, football, traveling and an author, check out my book{" "}
						<a href="/book">Beginners guide to web security</a>.
					</p>
					<p>
						To know more about what I do, follow me in{" "}
						<a href="https://twitter.com/gokul_i" target="_blank">
							twitter
						</a>
						.
					</p>
					<h2>Uses</h2>
					<ul>
						<li>💻 Computer: Macbook Pro 2018</li>
						<li>
							📝 Editor:
							<a href="https://code.visualstudio.com/" target="_blank">
								VS Code Editor
							</a>
						</li>
						<li>
							🎠 Editor Theme:
							<a
								href="https://marketplace.visualstudio.com/items?itemName=thedavej.night-owl-black"
								target="_blank"
							>
								Night Owl Black
							</a>
						</li>
						<li>
							📩 Newsletters:
							<a href="https://this-week-in-web.com" target="_blank">
								This Week In Web
							</a>{" "}
							&{" "}
							<a href="https://how-it-works.dev" target="_blank">
								How it works
							</a>
							- Javascript series
						</li>
						<li>
							⚙️
							<a href="https://github.com/gokulkrishh/dotfiles" target="_blank">
								My Dotfiles
							</a>
						</li>
						<li>
							🔩 Other Tools I use:
							<a href="/uses" target="_blank">
								Browsers, Terminal & Desktop Apps
							</a>
						</li>
					</ul>
				</div>
				<Newsletter />
			</div>
			<Footer />
		</Layout>
	);
};
