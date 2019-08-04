import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Bio from '../components/Bio';
import Footer from '../components/Footer';

export default () => (
	<Layout>
		<Helmet>
			<title>Gokulakrishnan Kalaikovan | About</title>
		</Helmet>
		<Header />
		<div className="grid">
			<Bio />
			<div className="about-me">
				<h2>Little about me:</h2>
				<p>
					I'm glad you made this far to my section. So thank you for that. Now lets talk about me. I started my career as HTML, CSS, little
					JS & PHP Developer. After moving to my 2nd company I started working on many javascript frameworks & web technologies. Then I
					slowly understood that I liked the web a lot.
				</p>
				<p>
					So I started following my passion and curiosity in open web, focusing on improving my skills as a web developer. I before even
					realizing I became an expert in what I was doing and got nominated for Google Developer Expert. Finally I became a GDE.
				</p>
				<p>As of now, I am continuing my passion towards web and improving myself and helping other fellow web dev's in web development.</p>
				<h2>My Recent Talks:</h2>
				<ul>
					<li>Intro to ReactJS in 2019.</li>
					<li>Serverless for frontend developer.</li>
					<li>Performance Budgeting.</li>
					<li>Lets Talk Web Performance.</li>
				</ul>
				More can be found{' '}
				<a href="https://github.com/gokulkrishh/my-talks" target="_blank">
					here
				</a>
				.<h2>Currently Using:</h2>
				<ul>
					<li>Computer: Macbook Pro 2018</li>
					<li>
						Editor:
						<a href="https://code.visualstudio.com/" target="_blank">
							VS Code Editor
						</a>
					</li>
					<li>
						Editor Theme:
						<a href="https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2" target="_blank">
							Cobalt 2
						</a>
					</li>
					<li>
						Newsletter:
						<a href="https://this-week-in-web.com" target="_blank">
							This Week In Web
						</a>
					</li>
					<li>
						Dotfiles:
						<a href="https://github.com/gokulkrishh/dotfiles" target="_blank">
							My Dotfiles
						</a>
					</li>
					<li>
						Other Tools:
						<a href="http://localhost:8000/blog/2019/tools-i-use/" target="_blank">
							Browsers, Terminal & Desktop Apps
						</a>
					</li>
				</ul>
			</div>
		</div>
		<Footer />
	</Layout>
);
