import type React from "react";

import { useMemo } from "react";
import {
	getLangCode,
	getLocalizedTextRaw,
} from "../LocalizationSelect/useLocalization";
import { importExportSaveLocalization } from "./constants/ImportExportLocalization";
interface Props {}
export const LoadGameInstruction: React.FC<Props> = ({}) => {
	const isEnglish = useMemo(() => {
		return getLangCode() === "";
	}, []);
	return (
		<h3
			style={{
				textAlign: "center",
				display: "flex",
				flexDirection: "column",
				gap: "10px",
			}}
		>
			<div
				style={{
					fontSize: "1.1em",
				}}
			>
				{getLocalizedTextRaw(importExportSaveLocalization.loadAGame)}
			</div>
			<div
				style={{
					fontSize: "0.8em",
				}}
			>
				{isEnglish ? (
					<>
						1. paste your
						<span
							style={{
								color: "gold",
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
					fontSize: "0.8em",
				}}
			>
				{isEnglish ? (
					<>
						2. click{" "}
						<span
							style={{
								color: "#00CF1F",
							}}
						>
							Load Save String
						</span>
					</>
				) : (
					getLocalizedTextRaw(importExportSaveLocalization.loadstep2)
				)}
			</div>
		</h3>
	);
};
