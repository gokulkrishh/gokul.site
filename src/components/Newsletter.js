import PropTypes from "prop-types";
import React from "react";

const Newsletter = () => {
	const [styles, setStyles] = React.useState({});
	const ref = React.createRef();

	return (
		<div className="Newsletter__container">
			<div className="Newsletter__title">
				<h4>Join my newsletter</h4>
				<p>
					Learn about Web, Javascript, Frameworks, Design, and about life with
					me.
				</p>
				<p className="Newsletter__spam">
					I promise you there won't be any spamming!.
				</p>
			</div>

			<div className="Newsletter__content">
				<form
					action="https://buttondown.email/api/emails/embed-subscribe/gokul.site"
					method="post"
					target="popupwindow"
					className="embeddable-buttondown-form"
					autoComplete={"on"}
				>
					<input
						id="bd-email"
						className="email-address"
						placeholder="Email address"
						required
						name="email"
						type="email"
						ref={ref}
					/>
					<input type="hidden" value="1" name="embed" />
					<input
						className="submit-btn"
						id="mc-embedded-subscribe"
						type="submit"
						value="Subscribe"
						onClick={() => {
							if (ref.current.checkValidity()) {
								setStyles({ display: "block" });
							}
						}}
					/>
				</form>
				<p className="Newsletter__confirmation" style={styles}>
					Thanks for subscribing! Your subscription is confirmed.
				</p>
			</div>
		</div>
	);
};

export default Newsletter;
