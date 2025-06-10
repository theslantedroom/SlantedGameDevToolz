import type React from "react";

import { getLocalizedTextRaw } from "../LocalizationSelect/useLocalization";
import { importExportSaveLocalization } from "./constants/ImportExportLocalization";
interface Props {
	saveString: string;
	handleChangeSaveString: (event: any) => void;
	defaultText?: string;
}
export const TextAreaSaveString: React.FC<Props> = ({
	saveString,
	handleChangeSaveString,
	defaultText,
}) => {
	return (
		<div
			style={{
				width: "100%",
			}}
		>
			<textarea
				id="myInput"
				value={saveString}
				// biome-ignore lint/a11y/noAutofocus: <explanation>
				autoFocus={true}
				onChange={handleChangeSaveString}
				placeholder={
					defaultText ||
					getLocalizedTextRaw(importExportSaveLocalization.saveBoxPlaceholder)
				}
				style={{
					boxSizing: "border-box",
					height: "50px",
					width: "100%",
					overflowY: "auto",
					backgroundColor: "black",
					color: "white",
					fontSize: "16px",
				}}
			/>
		</div>
	);
};
