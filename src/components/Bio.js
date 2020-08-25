import React from "react";

import profilePic from "./profile-pic.jpg";
import Github from "./github.svg";
import Twitter from "./twitter.svg";

export default class Bio extends React.Component {
	render() {
		return (
			<div className="about">
				<div>
					<h1>Hi, I'm Gokul 👋</h1>
					<p>
						I'm a web developer &{" "}
						<a
							href="https://google-developers.appspot.com/community/experts/directory/profile/profile-gokulakrishnan_kalaikovan"
							target="_blank"
						>
							Google Developer Expert (GDE)
						</a>
						based out of Bangalore, India. Besides coding, I like gaming (COD
						mobile mostly these days), running, football, travelling and finally
						an author in progress.
					</p>
					<div className="social">
						<a
							className="twitter"
							href="https://twitter.com/gokul_i"
							target="_blank"
						>
							<img src={Twitter} alt="Twitter" />
						</a>
						<a
							className="github"
							href="https://github.com/gokulkrishh"
							target="_blank"
						>
							<img src={Github} alt="Github" />
						</a>
					</div>
				</div>
				<picture>
					<img
						className="avatar"
						src={profilePic}
						alt="Gokulakrishnan Kalaikovan"
					/>
				</picture>
			</div>
		);
	}
}