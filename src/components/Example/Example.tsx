import type React from "react";
import { ImportExportLocalStorage } from "../ImportExportLocalStorage/ImportExportLocalStorage";
import { useLocalSaveData } from "../ImportExportLocalStorage/utils/useSaveData";
import { LocalizationSelect } from "../LocalizationSelect/LocalizationSelect";
export interface Props {
	count: number;
}
export const Example: React.FC<Props> = ({ count }) => {
	const { saveLocalStorageData, clearLocalStorageData, saveGameData } =
		useLocalSaveData();
	return (
		<div style={{ color: "white" }}>
			<div
				style={{
					padding: 24,
					color: "gold",
				}}
			>
				Diagnostics
				<p>save data: {JSON.stringify(saveGameData)}</p>
				<button onClick={clearLocalStorageData}>clear save data 1</button>
				<button onClick={() => saveLocalStorageData({ id: "new" })}>
					set save data: new
				</button>
				<button onClick={() => saveLocalStorageData({ id: "old" })}>
					set save data: old
				</button>
			</div>

			<h2>{`<ImportExportLocalStorage>`}</h2>
			<ImportExportLocalStorage />
			<h2>{`<LocalizationSelect>`}</h2>
			<LocalizationSelect />
		</div>
	);
};
