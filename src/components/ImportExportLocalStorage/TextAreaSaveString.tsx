import type React from "react";
import { colors } from "../../theme/palettes/colors";
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
				id={"myInput"}
				value={saveString}
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
					color: colors.dimGray,
					fontSize: "16px",
					border: `1px solid ${colors.azureBlue}`,
					borderRadius: "8px",
				}}
			/>
		</div>
	);
};
