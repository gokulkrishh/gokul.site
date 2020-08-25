import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Footer from "../components/Footer";

export default () => (
	<Layout>
		<Helmet>
			<title>Gokulakrishnan Kalaikovan | About</title>
		</Helmet>
		<Header />
		<div className="grid">
			<Bio />
			<div className="about-me">
				<h2>A little about me:</h2>
				<p>
					I'm glad you made this far to the website. So thank you for that. Now
					let's talk about me. I started my career as a UI Developer who knows
					HTML, CSS, little JS & PHP. After moving to my 2nd company, I started
					working on many javascript frameworks & web technologies. Then I
					slowly understood that I liked working on the web a lot.
				</p>
				<p>
					So I started following my passion and curiosity in the open web,
					focusing on improving my skills as a web developer. I before even
					realizing I became an expert in what I was doing and got nominated for
					Google Developer Expert. Finally, I became a Google Developer Expert
					(GDE) in Web Technologies.
				</p>
				<p>
					As of now, I am continuing my passion towards the web and improving
					myself and helping other fellow web devs.
				</p>
				<h2>My Recent Talks:</h2>
				<ul>
					<li>Intro to ReactJS.</li>
					<li>Serverless for frontend developer.</li>
					<li>Performance Budgeting.</li>
					<li>Lets Talk Web Performance.</li>
				</ul>
				More can be found{" "}
				<a href="https://github.com/gokulkrishh/my-talks" target="_blank">
					here
				</a>
				.<h2>Currently Using:</h2>
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
						</a>{" "}
						- Javascript series
					</li>
					<li>
						⚙️ Dotfiles:
						<a href="https://github.com/gokulkrishh/dotfiles" target="_blank">
							My Dotfiles
						</a>
					</li>
					<li>
						🔩Other Tools:
						<a href="/blog/2019/tools-i-use/" target="_blank">
							Browsers, Terminal & Desktop Apps
						</a>
					</li>
				</ul>
			</div>
		</div>
		<Footer />
	</Layout>
);
