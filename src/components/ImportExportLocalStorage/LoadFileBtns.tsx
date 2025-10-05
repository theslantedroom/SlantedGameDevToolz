import type React from "react";
import { HexBtn } from "../buttons/HexBtn/HexBtn";
import { getLocalizedTextRaw } from "../LocalizationSelect/useLocalization";
import { importExportSaveLocalization } from "./constants/ImportExportLocalization";

interface LoadStringBtnsProps {
	loadGameFromString: () => void;
	exportLocalStorageAsString: () => void;
}
export const LoadStringBtns: React.FC<LoadStringBtnsProps> = ({
	loadGameFromString,
	exportLocalStorageAsString,
}) => {
	return (
		<>
			<HexBtn
				label={getLocalizedTextRaw(importExportSaveLocalization.copySave)}
				onClick={exportLocalStorageAsString}
				minWidth={minWidth}
			/>
			<HexBtn
				label={getLocalizedTextRaw(importExportSaveLocalization.loadSave)}
				onClick={loadGameFromString}
				minWidth={minWidth}
			/>
		</>
	);
};

interface LoadFileBtnsProps {
	loadGameFromFile: () => void;
	exportLocalStorageAsFile: () => void;
}
const minWidth = 140;
export const LoadFileBtns: React.FC<LoadFileBtnsProps> = ({
	loadGameFromFile,
	exportLocalStorageAsFile,
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
						minWidth={minWidth}
					/>
					<HexBtn
						label={getLocalizedTextRaw(importExportSaveLocalization.loadFile)}
						onClick={loadGameFromFile}
						minWidth={minWidth}
					/>
				</>
			) : null}
		</div>
	);
};
