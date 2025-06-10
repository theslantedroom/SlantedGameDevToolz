import { useCallback, useEffect, useState } from "react";
import { type SAVE_DATA, saveKeys } from "../constants/SAVE_KEYS";
import { useIsLoadingLocalStorage } from "../stores/importExportLocalStorageStore";
import {
	compressObjectWithPako,
	decompressStringWithPako,
} from "./saveStringUtil";

export const getDataFromLocalStorage = () => {
	const savedDataString = localStorage.getItem(saveKeys.data);
	const savedData = savedDataString
		? (decompressStringWithPako(savedDataString) as SAVE_DATA)
		: null;
	return savedData;
};

export const saveDataToLocalStorage = (savedData: SAVE_DATA) => {
	localStorage.setItem(saveKeys.data, compressObjectWithPako(savedData));
};
export const deleteDataFromLocalStorage = () => {
	localStorage.removeItem(saveKeys.data);
};

export const useLocalSaveData = () => {
	const isLoading = useIsLoadingLocalStorage();
	const saveLocalStorageData = useCallback(
		async (savedData: SAVE_DATA) => {
			if (isLoading) return;

			if (!saveKeys.data) {
				console.error("!localSaveDataId");
				return;
			}

			saveDataToLocalStorage(savedData);
			_setsaveGameData(savedData);
		},
		[isLoading],
	);

	const clearLocalStorageData = useCallback(() => {
		if (!saveKeys.data) {
			console.error("!localSaveDataId");
			return;
		}
		deleteDataFromLocalStorage();
		_setsaveGameData(null);
	}, []);

	let loadedSaveData = getDataFromLocalStorage();

	const isSaveOk = checkSaveIsValid(loadedSaveData);

	if (!isSaveOk) {
		loadedSaveData = null;
	}

	const [saveGameData, _setsaveGameData] = useState<SAVE_DATA | null>(
		loadedSaveData,
	);

	useEffect(() => {
		if (!saveKeys.data) {
			console.error("!localSaveDataId");
			return;
		}
		const save = getDataFromLocalStorage();

		const isSaveValid = checkSaveIsValid(save);
		if (save && isSaveValid) {
			_setsaveGameData(save);
		}

		return function cleanup() {
			const save = getDataFromLocalStorage();
			if (!save) {
				_setsaveGameData(null);
			}
		};
	}, []);

	return { saveLocalStorageData, clearLocalStorageData, saveGameData };
};

const checkSaveIsValid = (save?: SAVE_DATA | null) => {
	if (!save) return false;
	return true;
};
