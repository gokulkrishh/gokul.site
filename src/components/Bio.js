import React from 'react';

import profilePic from './profile-pic.jpg';
import profilePicWebP from './profile-pic.webp';
import Github from './github.svg';
import Twitter from './twitter.svg';

export default class Bio extends React.Component {
	render() {
		return (
			<div className="about">
				<div>
					<h1>Hi, I'm Gokul</h1>
					<p>
						I'm a web developer based in India, Bangalore. I love web, contribute to open source, I talk about web & javascript, and a
						<a
							href="https://google-developers.appspot.com/community/experts/directory/profile/profile-gokulakrishnan_kalaikovan"
							target="_blank"
						>
							Google Developer Expert
						</a>
						for Web Technologies.
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
				<picture>
					<source type="image/webp" srcSet={profilePicWebP} alt="Gokulakrishnan Kalaikovan" />
					<img className="avatar" src={profilePic} alt="Gokulakrishnan Kalaikovan" />
				</picture>
			</div>
		);
	}
}
