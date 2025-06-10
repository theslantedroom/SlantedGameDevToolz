import type React from "react";
import { selectedGreenGlow } from "../../../theme/jsxCssClassics";

interface Props {
	label?: string;
	color?: string;
	onClick?: (arg?: any) => void;
	disabled?: boolean;
	isHidden?: boolean;
	highlight?: string;
	size?: number;
	width?: number;
	isGlow?: boolean;
}
export const HexBtn: React.FC<Props> = ({
	label = "start",
	onClick = () => null,
	disabled = false,
	color,
	highlight,
	isHidden,
	size = 11,
	isGlow,
	width,
}) => {
	const color1 = "#585858";
	const colorMain = "rgb(50, 46, 47, 1)";
	const colorHighlight = "rgba(22, 18, 19, 1)";
	const color4 = "rgb(124, 118, 119)";

	const backgroundImage = `radial-gradient(150% 70% at center 50%, ${
		color ? color : color1
	} -30%, ${colorMain} 49%, ${
		highlight ? highlight : colorHighlight
	} 100%, ${color4} 150%)`;

	const myStyle = {
		borderRadius: "12px",
		border: "3px outset #888",
		display: "inline-block",
		padding: "5px 5px",
		color: "#eee",
		letterSpacing: "1px",
		overflow: "hidden",
		fontFamily: "verdana",
		fontSize: `${size}px`,
		textDecoration: "none",
		background: "linear-gradient(160deg, #666, #444)",
		textShadow: "0px 0px 2px rgba(0, 0, 0, .5)",
		transition: "0.2s",
		marginLeft: "3px",
		marginRight: "3px",
		marginTop: "3px",
		marginBottom: "3px",
		backgroundImage: backgroundImage,
		cursor: "pointer",
		opacity: disabled ? 0.4 : 1,
		boxShadow: isGlow ? selectedGreenGlow : "0 0 10px rgba(0, 0, 0, 1)",
		width: width,
	};
	if (isHidden) return null;
	return (
		<button
			style={myStyle}
			disabled={disabled}
			onClick={() => {
				onClick();
			}}
		>
			{label}
		</button>
	);
};
