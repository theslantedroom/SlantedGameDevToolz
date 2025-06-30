import React from "react";

export const decorators = [
	(Story) => {
		return (
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: "rgb(59, 59, 59)",
					padding: "20px",
					boxSizing: "border-box",
					border: `1px solid ${"gold"}`,
				}}
			>
				{<Story />}
			</div>
		);
	},
];

export const parameters = {
	layout: "centered",
	a11y: {
		element: "#root",
		config: {},
		options: {},
		manual: false,
	},
};
export const tags = [];
