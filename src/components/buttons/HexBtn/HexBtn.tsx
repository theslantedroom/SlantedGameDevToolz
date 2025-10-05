import type React from "react";
import { selectedGreenGlow } from "../../../theme/jsxCssClassics";

interface Props {
	label?: string;
	onClick?: (arg?: any) => void;
	disabled?: boolean;
	isHidden?: boolean;
	size?: number;
	width?: number;
	minWidth?: number;
	isGlow?: boolean;
}
export const HexBtn: React.FC<Props> = ({
	label = "start",
	onClick = () => null,
	disabled = false,
	isHidden,
	size = 11,
	minWidth,
	isGlow,
	width,
}) => {
	const marginGap = 3;
	const myStyle = {
		borderRadius: "8px",
		border: "3px outset #888",
		display: "inline-block",
		padding: "5px 5px",
		color: "#e4e4e4ff",
		letterSpacing: "1px",
		overflow: "hidden",
		fontFamily: "verdana",
		fontSize: `${size}px`,
		textDecoration: "none",
		background: "linear-gradient(160deg, #afafafff, #6e6e6eff)",
		textShadow: "0px 0px 2px rgba(0, 0, 0, 0.85)",
		transition: "0.2s",
		marginLeft: marginGap,
		marginRight: marginGap,
		marginTop: marginGap,
		marginBottom: marginGap,
		cursor: "pointer",
		opacity: disabled ? 0.4 : 1,
		boxShadow: isGlow ? selectedGreenGlow : "0 0 2px rgba(0, 22, 63, 0.5)",
		width: width,
		minWidth: minWidth ? minWidth : undefined,
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
