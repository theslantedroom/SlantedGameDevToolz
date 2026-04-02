import type React from "react";
import type { CSSProperties } from "react";
import { HexBtn } from "../buttons/HexBtn/HexBtn";
import { getLocalizedTextRaw } from "../LocalizationSelect/useLocalization";
import { importExportSaveLocalization } from "./constants/ImportExportLocalization";

interface LoadStringBtnsProps {
	loadGameFromString: () => void;
	exportLocalStorageAsString: () => void;
	btnCssOverride?: CSSProperties;
}
export const LoadStringBtns: React.FC<LoadStringBtnsProps> = ({
	loadGameFromString,
	exportLocalStorageAsString,
	btnCssOverride = {},
}) => {
	return (
		<>
			<HexBtn
				label={getLocalizedTextRaw(importExportSaveLocalization.copySave)}
				onClick={exportLocalStorageAsString}
				minWidth={minWidth}
				btnCssOverride={btnCssOverride}
			/>
			<HexBtn
				label={getLocalizedTextRaw(importExportSaveLocalization.loadSave)}
				onClick={loadGameFromString}
				minWidth={minWidth}
				btnCssOverride={btnCssOverride}
			/>
		</>
	);
};

interface LoadFileBtnsProps {
	loadGameFromFile: () => void;
	exportLocalStorageAsFile: () => void;
	btnCssOverride?: CSSProperties;
}
const minWidth = 140;
export const LoadFileBtns: React.FC<LoadFileBtnsProps> = ({
	loadGameFromFile,
	exportLocalStorageAsFile,
	btnCssOverride = {},
}) => {
	const showSaveFileBtns = true;
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-evenly",
				width: "100" + "%",
			}}
		>
			{showSaveFileBtns ? (
				<>
					<HexBtn
						label={getLocalizedTextRaw(importExportSaveLocalization.saveFile)}
						onClick={exportLocalStorageAsFile}
						btnCssOverride={btnCssOverride}
						minWidth={minWidth}
					/>
					<HexBtn
						label={getLocalizedTextRaw(importExportSaveLocalization.loadFile)}
						onClick={loadGameFromFile}
						btnCssOverride={btnCssOverride}
						minWidth={minWidth}
					/>
				</>
			) : null}
		</div>
	);
};
