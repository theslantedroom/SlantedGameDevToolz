import type React from "react";
import { ImportExportLocalStorage } from "../ImportExportLocalStorage/ImportExportLocalStorage";
import { useLocalSaveData } from "../ImportExportLocalStorage/utils/useSaveData";
import { LocalizationSelect } from "../LocalizationSelect/LocalizationSelect";
export interface Props {}

const defaultData = { id: "myKey" };
export const Example: React.FC<Props> = ({}) => {
	const { saveLocalStorageData, clearLocalStorageData, saveGameData } =
		useLocalSaveData(defaultData);
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
				<button
					onClick={() => {
						const newSave: typeof defaultData = { id: "new" };
						saveLocalStorageData(newSave);
					}}
				>
					set save data: new
				</button>
				<button
					onClick={() => {
						const newSave: typeof defaultData = { id: "old" };
						saveLocalStorageData(newSave);
					}}
				>
					set save data: old
				</button>
			</div>

			<h2>{`<ImportExportLocalStorage>`}</h2>
			<ImportExportLocalStorage defaultData={{ example: "example" }} />
			<h2>{`<LocalizationSelect>`}</h2>
			<LocalizationSelect />
		</div>
	);
};
