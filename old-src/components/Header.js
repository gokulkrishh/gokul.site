import React from 'react';
import { Link } from 'gatsby';

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
							<Link to="/opensources/" activeClassName="active">
								Open Sources
							</Link>
						</li>
						<li>
							<Link to="/about/" activeClassName="active">
								Me
							</Link>
						</li>
					</ul>
				)}
			</div>
		</header>
	);
};

export default Header;
