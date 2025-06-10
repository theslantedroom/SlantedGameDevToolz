import type React from "react";

import { useMemo } from "react";
import {
	getLangCode,
	getLocalizedTextRaw,
} from "../LocalizationSelect/useLocalization";
import { importExportSaveLocalization } from "./constants/ImportExportLocalization";
interface Props {}
export const CopySaveStringToast: React.FC<Props> = ({}) => {
	const isEnglish = useMemo(() => {
		return getLangCode() === "";
	}, []);
	return (
		<div style={{ maxHeight: "200vw", overflowY: "auto" }}>
			<h1 style={{ textAlign: "center", fontSize: "1.9em" }}>
				{getLocalizedTextRaw(importExportSaveLocalization.SaveSuccessful)}
			</h1>
			<h3
				style={{
					textAlign: "center",
					fontSize: "1.1em",
					color: "pink",
				}}
			>
				{getLocalizedTextRaw(importExportSaveLocalization.SaveCopied)}
			</h3>
			{isEnglish ? (
				<h3 style={{ textAlign: "center", fontSize: "0.9em" }}>
					{`Be sure to store your `}
					<span style={{ color: "gold" }}>SAVE STRING</span> somewhere safe.
				</h3>
			) : null}
		</div>
	);
};
