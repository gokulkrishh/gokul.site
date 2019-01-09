import React from 'react';

import profilePic from './profile-pic.jpg';
import profilePicWebP from './profile-pic.webp';
import Github from './github.svg';
import Twitter from './twitter.svg';

export default class Bio extends React.Component {
	render() {
		return (
			<div className="about">
				<picture>
					<source type="image/webp" srcSet={profilePicWebP} alt="Gokulakrishnan Kalaikovan" />
					<img className="avatar" src={profilePic} alt="Gokulakrishnan Kalaikovan" />
				</picture>
				<div>
					<h1>Gokulakrishnan Kalaikovan</h1>
					<p>
						<b>Web Developer</b> &
						<a href="https://developers.google.com/experts/people/gokulakrishnan-kalaikovan" target="_blank">
							Google Developer Expert
						</a>
						based in India, Bangalore.
					</p>
					<div className="social">
						<a className="twitter" href="https://twitter.com/gokul_i" target="_blank">
							<img src={Twitter} alt="Twitter" />
						</a>
						<a className="github" href="https://github.com/gokulkrishh" target="_blank">
							<img src={Github} alt="Github" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}
