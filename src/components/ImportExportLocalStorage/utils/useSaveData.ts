/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: <explanation> */
import { useCallback, useEffect, useState } from "react";
import { saveKeys } from "../constants/SAVE_KEYS";
import { useIsLoadingLocalStorage } from "../stores/importExportLocalStorageStore";
import {
	compressObjectWithPako,
	decompressStringWithPako,
} from "./saveStringUtil";

export const getDataFromLocalStorage = (defaultData: Record<string, any>) => {
	const savedDataString = localStorage.getItem(saveKeys.data);
	const savedData = savedDataString
		? (decompressStringWithPako(savedDataString) as typeof defaultData)
		: null;
	return savedData;
};

export const saveDataToLocalStorage = (
	defaultData: Record<string, any>,
	savedData: typeof defaultData,
) => {
	localStorage.setItem(saveKeys.data, compressObjectWithPako(savedData));
};
export const deleteDataFromLocalStorage = () => {
	localStorage.removeItem(saveKeys.data);
};

export const useLocalSaveData = (defaultData: Record<string, any>) => {
	const isLoading = useIsLoadingLocalStorage();
	const saveLocalStorageData = useCallback(
		async (savedData: typeof defaultData) => {
			if (isLoading) return;

			if (!saveKeys.data) {
				console.error("!localSaveDataId");
				return;
			}

			saveDataToLocalStorage(defaultData, savedData);
			_setsaveGameData(savedData);
		},
		[isLoading, defaultData],
	);

	const clearLocalStorageData = useCallback(() => {
		if (!saveKeys.data) {
			console.error("!localSaveDataId");
			return;
		}
		deleteDataFromLocalStorage();
		_setsaveGameData(null);
	}, []);

	let loadedSaveData = getDataFromLocalStorage(defaultData);

	const isSaveOk = checkSaveIsValid(defaultData, loadedSaveData);

	if (!isSaveOk) {
		loadedSaveData = null;
	}

	const [saveGameData, _setsaveGameData] = useState<typeof defaultData | null>(
		loadedSaveData,
	);

	useEffect(() => {
		if (!saveKeys.data) {
			console.error("!localSaveDataId");
			return;
		}
		const save = getDataFromLocalStorage(defaultData);

		const isSaveValid = checkSaveIsValid(defaultData, save);
		if (save && isSaveValid) {
			_setsaveGameData(save);
		}

		return function cleanup() {
			const save = getDataFromLocalStorage(defaultData);
			if (!save) {
				_setsaveGameData(null);
			}
		};
	}, [defaultData]);

	return { saveLocalStorageData, clearLocalStorageData, saveGameData };
};

const checkSaveIsValid = (
	defaultData: Record<string, any>,
	save?: typeof defaultData | null,
) => {
	if (!save) return false;
	return true;
};
