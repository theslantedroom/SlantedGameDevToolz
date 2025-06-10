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
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "20px",
					boxSizing: "border-box",
				}}
			>
				<div
					style={{
						overflow: "auto",
						border: "10px solid grey",
						borderRadius: "2px",
						maxWidth: "100%",
						maxHeight: "100%",
					}}
				>
					{<Story />}
				</div>
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
