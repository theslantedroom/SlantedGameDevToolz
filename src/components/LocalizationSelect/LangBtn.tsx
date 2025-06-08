import type React from "react";
import type { CSSProperties } from "react";
import type { LangCode } from "./langCodes";

export interface Props {
	isSelected: boolean;
	imgPath: string;
	setLanguage: (code: LangCode) => void;
	code: LangCode;
	size?: number;
}

export const LangBtn: React.FC<Props> = ({
	isSelected,
	setLanguage,
	imgPath,
	code,
	size = 70,
}) => {
	const linkBtnStyle = {
		cursor: "pointer",
		padding: "2px",
		width: `${size}px`,
		height: "auto",
		border: isSelected ? `2px solid lime` : "",
	} as CSSProperties;
	return (
		<div onClick={() => setLanguage(code ? code : "")}>
			<img style={linkBtnStyle} src={`flags/${imgPath}.png`} alt={imgPath} />
		</div>
	);
};
