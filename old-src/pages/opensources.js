import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Bio from '../components/Bio';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';

import opensources from '../data/opensources.json';

export default class OpenSource extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			repos: opensources.sort(data => data.stars) || [],
			sortBy: 'stars'
		};
	}

	sortByUtil() {
		const { repos, sortBy } = this.state;
		if (sortBy === '') return repos;
		const sortedRepos = repos.sort((A, B) => {
			if (A[sortBy] < B[sortBy]) return 1;
			else if (A[sortBy] > B[sortBy]) return -1;
			else return 0;
		});
		return sortedRepos;
	}

	renderRepos() {
		const { repos } = this.state;
		if (repos.length === 0) return <Spinner show />;
		return this.sortByUtil().map((repo, index) => {
			return (
				<Card key={index}>
					{repo.contribution ? <span className="contributed" /> : null}
					<a href={repo.url} target="_blank" rel="noopener noreferrer">
						<h4>{repo.name}</h4>
					</a>
					<p className="card__desc">{repo.desc}</p>
					<div className="card__info">
						<b>Star:</b>
						{repo.stars}
						<b>Fork:</b>
						{repo.forks}
					</div>
					<div className="languages">
						{repo.languages.split(',').map(language => {
							return (
								<span className={`tags ${language}`} key={language}>
									{language}
								</span>
							);
						})}
					</div>
				</Card>
			);
		});
	}

	render() {
		return (
			<Layout className="open-sources">
				<Helmet>
					<title>Gokulakrishnan Kalaikovan | Open Sources</title>
				</Helmet>
				<Header />
				<div className="grid">
					<div className="title">
						<h1>Open Sources</h1>
						<p>
							<span className="contributed" /> OSS Contributions
						</p>
					</div>
					<div className="cards">{this.renderRepos()}</div>
					<Bio />
				</div>
				<Footer />
			</Layout>
		);
	}
}
