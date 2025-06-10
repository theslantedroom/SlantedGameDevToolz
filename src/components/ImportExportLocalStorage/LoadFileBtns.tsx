import type React from "react";

import { colors } from "../../theme/palettes/colors";
import { getLocalizedTextRaw } from "../LocalizationSelect/useLocalization";
import { HexBtn } from "../buttons/HexBtn/HexBtn";
import { importExportSaveLocalization } from "./constants/ImportExportLocalization";
interface Props {
	loadGameFromFile: () => void;
	exportLocalStorageAsFile: () => void;
}
export const LoadFileBtns: React.FC<Props> = ({
	loadGameFromFile,
	exportLocalStorageAsFile,
}) => {
	const showSaveFileBtns = true;
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			{showSaveFileBtns ? (
				<>
					<HexBtn
						label={getLocalizedTextRaw(importExportSaveLocalization.saveFile)}
						onClick={exportLocalStorageAsFile}
						highlight={colors.gold}
					/>
					<HexBtn
						label={getLocalizedTextRaw(importExportSaveLocalization.loadFile)}
						onClick={loadGameFromFile}
						highlight={colors.gold}
					/>
				</>
			) : null}
		</div>
	);
};
