import type React from "react";

import { useMemo } from "react";
import { colors } from "../../theme/palettes/colors";
import {
	getLangCode,
	getLocalizedTextRaw,
} from "../LocalizationSelect/useLocalization";
import { importExportSaveLocalization } from "./constants/ImportExportLocalization";
import { cardCss } from "./style/css";

interface Props {
	outlineColor?: string;
	outlineThickness?: number;
	cardBgColor: string;
	textColor?: string;
}
const outlineBlack = "black";
export const LoadGameInstruction: React.FC<Props> = ({
	outlineColor = "#c0c0c0ff",
	outlineThickness = 0.5,
	cardBgColor,
	textColor = "#000000ff",
}) => {
	const isEnglish = useMemo(() => {
		return getLangCode() === "";
	}, []);
	const t = typeof outlineThickness === "number" ? outlineThickness : 1;
	const textOutline = {
		textShadow: `-${t}px -${t}px 0 ${outlineColor}, ${t}px -${t}px 0 ${outlineColor}, -${t}px ${t}px 0 ${outlineColor}, ${t}px ${t}px 0 ${outlineColor}`,
	};

	const textOutlineBlack = {
		textShadow: `-${t}px -${t}px 0 ${outlineBlack}, ${t}px -${t}px 0 ${outlineBlack}, -${t}px ${t}px 0 ${outlineBlack}, ${t}px ${t}px 0 ${outlineBlack}`,
	};
	const cardStyle = {
		...cardCss,
		background: cardBgColor,
	};
	return (
		<div style={cardStyle}>
			<div
				style={{
					fontSize: "1.1em",
					fontWeight: 600,
					marginBottom: "10px",
					textAlign: "left",
					color: textColor,
					fontFamily: "Inter, Segoe UI, Arial, Helvetica, sans-serif",
					...textOutline,
				}}
			>
				{getLocalizedTextRaw(importExportSaveLocalization.loadAGame)}
			</div>
			<div
				style={{
					fontSize: "0.95em",
					marginBottom: "8px",
					textAlign: "left",
					color: textColor,
					fontFamily: "Inter, Segoe UI, Arial, Helvetica, sans-serif",
					...textOutline,
				}}
			>
				{isEnglish ? (
					<>
						1. paste your
						<span
							style={{
								color: colors.redBoxerPinkRed,
								fontFamily: "Inter, Segoe UI, Arial, Helvetica, sans-serif",
								...textOutlineBlack,
							}}
						>
							{" "}
							SAVE STRING{" "}
						</span>
						in the text box
					</>
				) : (
					getLocalizedTextRaw(importExportSaveLocalization.loadstep1)
				)}
			</div>
			<div
				style={{
					fontSize: "0.95em",
					textAlign: "left",
					color: textColor,
					fontFamily: "Inter, Segoe UI, Arial, Helvetica, sans-serif",
					...textOutline,
				}}
			>
				{isEnglish ? (
					<>
						2. click{" "}
						<span
							style={{
								color: "#008f15ff",
								fontFamily: "Inter, Segoe UI, Arial, Helvetica, sans-serif",
								...textOutlineBlack,
							}}
						>
							Load Save String
						</span>
					</>
				) : (
					getLocalizedTextRaw(importExportSaveLocalization.loadstep2)
				)}
			</div>
		</div>
	);
};
