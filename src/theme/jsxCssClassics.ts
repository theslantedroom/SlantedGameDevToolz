import type { CSSProperties } from "react";

export const btnSx = {
	backgroundImage:
		"linear-gradient(to right top, #192941, #122649, #0f224f, #131d55, #1c1658)",
	borderRadius: "5px",
	boxSizing: "border-box",
	border: "1px solid grey",
	color: "#FFFFFF",
	display: "flex",
	fontSize: "16px",
	justifyContent: "center",
	textDecoration: "none",
	margin: "4px",
	cursor: "pointer",
	userSelect: "none",
	width: "100px",
	WebkitUserSelect: "none",
	touchAction: "manipulation",
	maxWidth: "650px",
	padding: "8px 15px",
} as CSSProperties;

export const jsxCss = {
	centerSpill: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
		gap: "2px",
	} as CSSProperties,

	center: {
		display: "flex",
		justifyContent: "center",
	} as CSSProperties,

	centerStack: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		flexWrap: "wrap",
		alignItems: "center",
	} as CSSProperties,

	fixed: {
		position: "fixed",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	} as CSSProperties,

	row: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		flexWrap: "wrap",
		alignItems: "center",
	} as CSSProperties,
};

export const chipStyle = {
	textAlign: "center",
	padding: "4px 8px 4px 8px",
	border: "1px solid rgba(0,0,0,0.5)",
	borderRadius: "10px",
	fontSize: "0.9em",
	display: "flex",
	flexWrap: "wrap",
	flexDirection: "column",
	justifyContent: "center",
	backgroundColor: "rgba(0, 51, 92, 0.5)",
} as CSSProperties;

export const textOutline = {
	black: {
		textShadow:
			"-1px -1px 0 #000,\n    1px -1px 0 #000,\n    -1px 1px 0 #000,\n    1px 1px 0 #000",
	},
	blackThick: {
		textShadow:
			"-1.5px -1.5px 0 #000,\n    1.5px -1.5px 0 #000,\n    -1.5px 1.5px 0 #000,\n    1.5px 1.5px 0 #000",
	},
	blackHalf: {
		textShadow:
			"-0.5px -0.5px 0 #000,\n    0.5px -0.5px 0 #000,\n    -0.5px 0.5px 0 #000,\n    0.5px 0.5px 0 #000",
	},
	white: {
		textShadow:
			"-1px -1px 0 #ffffff,\n    1px -1px 0 #ffffff,\n    -1px 1px 0 #ffffff,\n    1px 1px 0 #ffffff",
	},
	whiteHalf: {
		textShadow:
			"-0.5px -0.5px 0 #ffffff,\n    0.5px -0.5px 0 #ffffff,\n    -0.5px 0.5px 0 #ffffff,\n    1px 1px 0 #ffffff",
	},
	shadow: {
		textShadow:
			"2px 7px 5px rgba(0,0,0,0.3), \n    0px -4px 10px rgba(255,255,255,0.3)",
	},
};

export const selectedRedGlow = `0 0 10px rgba(255, 0, 0, 1), 0 0 20px 5px rgba(255, 0, 0, 0.8), 0 0 30px 15px rgba(255, 0, 0, 0.5)`;

export const selectedGreenGlow = `0 0 10px rgba(0, 255, 0, 1), 0 0 20px 5px rgba(0, 175, 0, 0.8), 0 0 30px 15px rgba(0, 225, 0, 0.5)`;

export const selectedPinkGlow = `0 0 10px rgba(255, 0, 255, 1), 0 0 20px 5px rgba(255, 0, 175, 0.8), 0 0 30px 15px rgba(255, 0, 225, 0.5)`;

export const selectedBabyBlueGlow = `0 0 10px rgba(173, 216, 230, 1), 0 0 20px 5px rgba(135, 206, 250, 0.8), 0 0 30px 15px rgba(135, 206, 250, 0.5)`;
