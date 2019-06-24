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
				<h1>About</h1>
				<ul>
					<li>
						I currently work as <b>Senior Consultant</b> at <b>ThoughtWorks</b> in
						<b> India, Bangalore</b>.
					</li>
					<li>
						<a href="https://developers.google.com/experts/people/gokulakrishnan-kalaikovan.html" target="_blank">
							Google Developer Expert
						</a>
						for Web Technologies.
					</li>
					<li>An open source contributor and tech enthusiasts.</li>
					<li>
						Curator of
						<a title="Progressive Web Application" href="https://pwa.tips" target="_blank">
							pwa.tips
						</a>
						. Monthly newsletter for pwa, browser updates etc,.
					</li>
					<li>
						My recent works & open sourced apps are
						<a href="/opensources">here</a>.
					</li>
				</ul>

				<h2>
					<a href="https://git.io/my-talks" target="_blank">
						My Talks
					</a>
				</h2>
			</div>
		</div>
		<Footer />
	</Layout>
);
