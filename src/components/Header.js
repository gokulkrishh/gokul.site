import React from "react";
import { Link } from "gatsby";

const Header = ({ hideLinks = false }) => {
	return (
		<header>
			<div className="grid">
				<h1 />
				{!hideLinks && (
					<ul className="menu">
						<li>
							<Link to="/" activeClassName="active">
								Blog
							</Link>
						</li>
						<li>
							<Link to="/about/" activeClassName="active">
								About
							</Link>
						</li>
						<li>
							<a href="https://github.com/gokulkrishh" target="_blank">
								Open Sources
							</a>
						</li>
					</ul>
				)}
			</div>
		</header>
	);
};

export default Header;
