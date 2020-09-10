import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Bio from "../components/Bio";
import Footer from "../components/Footer";

export default () => (
	<Layout>
		<Helmet>
			<title>Gokulakrishnan Kalaikovan | About</title>
		</Helmet>
		<Header />
		<div className="grid">
			{/* <Bio /> */}
			<div className="about-me">
				<h2>About me</h2>
				<p>
					I'm glad that you made this far to my website. Now let's talk about
					me. I started my career as a self-taught UI Developer using HTML, CSS,
					javascript & PHP. After few months, I got a chance to work on Angular
					(v1.5) and slowly started working on many other javascript frameworks
					like ember, backbone, kendo ui, knockoutjs etc,. In the beginning of
					my career only I understood that I liked working on the web a lot.
				</p>
				<p>
					So I started following my passion and curiosity in the open web,
					focusing on improving my skills as a web developer. Before even I
					realized I became an expert in what I was doing and got nominated for
					Google Developer Expert (GDE). After two discussions with a googler
					and an existing GDE and a few months of waiting, I became a Google
					Developer Expert (GDE) in Web Technologies.
				</p>
				<p>
					As of now, I am continuing my passion towards the web and improving
					myself and helping other fellow web devs. Besides coding, I like
					gaming (COD mobile mostly these days), running, football, traveling
					and finally an author in progress. To know more about my book, follow
					me in{" "}
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
						🎠Editor Theme:
						<a
							href="https://marketplace.visualstudio.com/items?itemName=thedavej.night-owl-black"
							target="_blank"
						>
							Night Owl Black
						</a>
					</li>
					<li>
						📩Newsletters:
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
						🔩Other Tools I use:
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
