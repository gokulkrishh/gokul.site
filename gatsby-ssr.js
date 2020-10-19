import React from "react";

export const onRenderBody = ({ setHeadComponents, ...others }) => {
	setHeadComponents([
		<script
			key="tracking"
			src="https://gumroad.com/js/gumroad.js"
			type="text/javascript"
			async
		/>
	]);
};
