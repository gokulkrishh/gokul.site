import React from "react";
import { Link } from "gatsby";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { useRef } from "react";


const Header = ({ hideLinks = false }) => {
	const themeRef = useRef(false)
	return (
		<header>
			<div className="grid">
			<h1><a href="/">gokul.site</a></h1>
				{!hideLinks && (
					<ul className="menu">
						<li>
							<Link to="/" activeClassName="active">
								Blog
							</Link>
						</li>
						<li>
							<Link to="/book/" activeClassName="active">
								Book
							</Link>
						</li>
						<li>
							<Link to="/about/" activeClassName="active">
								About
							</Link>
						</li>
						<li className="theme-switcher">
						<ThemeToggler>
							{({ theme, toggleTheme }) => (
								<label onClick={e => {
									const isDark = theme === 'dark';
									themeRef.current.checked = !isDark;
									toggleTheme(themeRef.current.checked ? 'dark' : 'light')
								}}>
									<input
										type="checkbox"
										ref={themeRef}
										checked={theme === 'dark'}
									/>
								</label>
							)}
						</ThemeToggler>
						</li>
					</ul>
				)}
			</div>
		</header>
	);
};

export default Header;
