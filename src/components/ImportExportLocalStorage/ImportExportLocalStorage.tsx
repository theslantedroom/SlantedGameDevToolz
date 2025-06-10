/* eslint-disable no-prototype-builtins */
import type React from "react";
import {
	type ChangeEvent,
	useCallback,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { ToastContainer, toast } from "react-toastify";

import { btnSx, jsxCss } from "../../theme/jsxCssClassics";
import { colors } from "../../theme/palettes/colors";
import {
	saveStringToastConfig,
	standardToastConfig,
} from "../../theme/toastConfig";
import { getLocalizedTextRaw } from "../LocalizationSelect/useLocalization";
import { HexBtn } from "../buttons/HexBtn/HexBtn";
import { CopySaveStringToast } from "./CopySaveStringToast";
import { LoadFileBtns } from "./LoadFileBtns";
import { LoadGameInstruction } from "./LoadGameInstruction";
import { TextAreaSaveString } from "./TextAreaSaveString";
import { importExportSaveLocalization } from "./constants/ImportExportLocalization";
import { saveKeys } from "./constants/SAVE_KEYS";
import { useImportExportLocalStorageActions } from "./stores/importExportLocalStorageStore";
import {
	compressObjectWithPako,
	decompressStringWithPako,
} from "./utils/saveStringUtil";

export interface Props {
	defaultData: Record<string, any>;
}

export const ImportExportLocalStorage: React.FC<Props> = ({ defaultData }) => {
	const hasShownToastOnSave = useRef(false);
	const [saveString, setSaveString] = useState("");
	const { setIsLoading, handleResetGame } =
		useImportExportLocalStorageActions();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [showResetConfirmation, setShowResetConfirmation] = useState(false);

	// notifications
	const showLoadError = useCallback(
		(src: string) => {
			console.error("invalid Save file", src);
			setIsLoading(false);
			toast(
				<div style={{ textAlign: "center", width: "100%" }}>
					{getLocalizedTextRaw(importExportSaveLocalization.invalidSave)}
				</div>,
				standardToastConfig,
			);
		},
		[setIsLoading],
	);

	const showLoadSuccess = useCallback(() => {
		setTimeout(() => {
			window.location.reload();
		}, 1000);
		toast(
			<div style={{ textAlign: "center", width: "100%" }}>
				{getLocalizedTextRaw(importExportSaveLocalization.saveLoading)}
			</div>,
			standardToastConfig,
		);
	}, []);

	const importLocalStorageFromFile = (file: File | null) => {
		if (!file) {
			console.error("No file selected.");
			return;
		}
		const reader = new FileReader();
		reader.onload = (event: ProgressEvent<FileReader>) => {
			try {
				const importedData = decompressStringWithPako(
					event.target?.result as string,
				) as Record<string, string>;
				if (!importedData) {
					showLoadError("File: !importedData");
					return;
				}

				const hasdata = importedData.hasOwnProperty(saveKeys.data);

				const isValidSave = hasdata;
				if (!isValidSave) {
					showLoadError(`File: missing ${saveKeys.data}`);
					return;
				}
				for (const key in importedData) {
					if (importedData.hasOwnProperty(key)) {
						localStorage.setItem(key, importedData[key]);
					}
				}
				window.location.reload();
			} catch (error) {
				showLoadError("File: error");
				console.error("Error importing local storage data:", error);
			}
		};

		reader.readAsText(file);
	};

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (loadEvent: ProgressEvent<FileReader>) => {
				try {
					const importedData = decompressStringWithPako(
						loadEvent.target?.result as string,
					);
					// Check if the importedData is a valid JSON object
					if (importedData && typeof importedData === "object") {
						importLocalStorageFromFile(file);
					} else {
						showLoadError("handleFileChange: !importedData");
						console.error("Invalid JSON format.");
					}
				} catch (error) {
					showLoadError("handleFileChange: error");
					console.error("Error parsing JSON:", error);
				}
			};
			reader.readAsText(file);
		}
	};

	// WEB FILE SAVE
	const exportLocalStorageAsFile = useCallback(() => {
		const localStorageData = compressObjectWithPako(localStorage);

		const blob = new Blob([localStorageData], { type: "application/json" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = `turnBasedBoxingSave.txt`;
		a.click();
	}, []);

	const loadGameFromFile = useCallback(() => {
		setIsLoading(true);
		fileInputRef.current?.click();
	}, [setIsLoading]);

	// STRING SAVE
	const exportLocalStorageAsString = useCallback(() => {
		// Convert localStorage to a regular JSON object
		const localStorageData = {};
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i);
			if (key !== null) {
				// Ensure the key is not null
				// @ts-ignore
				localStorageData[key] = localStorage.getItem(key);
			}
		}

		const localStorageString = compressObjectWithPako(localStorageData);
		setSaveString(localStorageString); // Set the save string first
		// Copy to clipboard
		return navigator.clipboard
			.writeText(localStorageString)
			.then(() => {
				if (!hasShownToastOnSave.current) {
					hasShownToastOnSave.current = true;
					toast(<CopySaveStringToast />, saveStringToastConfig);
				}
				return localStorageString; // Return the value to ensure then() resolves with something
			})
			.catch((err) => {
				console.error("Unable to copy to clipboard", err);
				throw err; // Ensure the error is propagated in the Promise chain
			});
	}, []);

	const loadGameFromString = useCallback(async () => {
		if (!saveString || typeof saveString !== "string") {
			showLoadError("String: !saveString");
			return;
		}

		const importedData = decompressStringWithPako(saveString);

		if (importedData && typeof importedData === "object") {
			const hasdata = importedData.hasOwnProperty(saveKeys.data);
			const isValidSave = hasdata;
			if (!isValidSave) {
				showLoadError(`String: missing ${saveKeys.data}`);
				return;
			}

			setIsLoading(true);

			// Assuming localStorageData is an object
			for (const key in importedData) {
				const isdata = key === saveKeys.data;
				if (!isdata) {
					console.log("skip loading.. additional key detected", key);
				}
				// @ts-ignore
				localStorage.setItem(key, importedData[key]);
			}

			showLoadSuccess();
		} else {
			showLoadError("String: error");
			console.error("Invalid Load String.");
		}
	}, [setIsLoading, saveString, showLoadError, showLoadSuccess]);

	const handleChangeSaveString = (event: any) => {
		setSaveString(event.target.value);
	};

	// RESET
	const resetGame = () => {
		if (!showResetConfirmation) {
			setShowResetConfirmation(true);
			return;
		}
		setShowResetConfirmation(false);
		handleResetGame();
	};

	useLayoutEffect(() => {
		// Initialize Data
		if (!localStorage.getItem(saveKeys.data)) {
			localStorage.setItem(saveKeys.data, compressObjectWithPako(defaultData));
		}
	}, [defaultData]);

	const sx = {
		...btnSx,
		marginBottom: "10px",
		color: showResetConfirmation ? "red" : "white",
		width: showResetConfirmation ? "150px" : "100px",
	};

	return (
		<>
			<ToastContainer
				position="top-center"
				toastStyle={{
					border: "4px solid grey",
					borderRadius: "12px",
					minHeight: "initial",
					backgroundColor: "rgb(1,1,1,0.9)",
					boxSizing: "border-box",
				}}
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
				theme="dark"
				limit={1}
			/>
			<div
				style={{
					...jsxCss.centerSpill,
					width: "100%",
					margin: "10px auto",
					border: `4px solid ${colors.absoluteBlack}`,
					boxSizing: "border-box",
					borderRadius: "12px",
					color: colors.azureBlue,
					backgroundColor: colors.blackestBlack,
					padding: "0px 12px",
				}}
			>
				<input
					type="file"
					ref={fileInputRef}
					onChange={handleFileChange}
					accept=".txt"
					style={{ display: "none" }}
				/>
				<div
					style={{
						...jsxCss.centerStack,
						width: "100%",
						margin: "10px auto 40px auto",
					}}
				>
					{showResetConfirmation ? (
						<p id="warning" style={{ marginTop: "220px" }}>
							{getLocalizedTextRaw(
								importExportSaveLocalization.warningClearSave,
							)}
						</p>
					) : null}

					<div>
						{showResetConfirmation ? null : (
							<>
								<LoadGameInstruction />
								<TextAreaSaveString
									saveString={saveString}
									handleChangeSaveString={handleChangeSaveString}
								/>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										flexWrap: "wrap",
										background: "black",
										borderRadius: "0px 0px 10px 10px",
									}}
								>
									<HexBtn
										label={getLocalizedTextRaw(
											importExportSaveLocalization.copySave,
										)}
										onClick={exportLocalStorageAsString}
										highlight={colors.lime}
									/>
									<HexBtn
										label={getLocalizedTextRaw(
											importExportSaveLocalization.loadSave,
										)}
										onClick={loadGameFromString}
										highlight={colors.lime}
									/>
									<LoadFileBtns
										loadGameFromFile={loadGameFromFile}
										exportLocalStorageAsFile={exportLocalStorageAsFile}
									/>
								</div>
							</>
						)}
					</div>

					<div style={{ padding: 10 }}>
						<HexBtn
							onClick={resetGame}
							label={
								showResetConfirmation
									? getLocalizedTextRaw(
											importExportSaveLocalization.clearDataNewGame,
										)
									: getLocalizedTextRaw(importExportSaveLocalization.newGame)
							}
						/>
						{showResetConfirmation ? (
							<HexBtn
								onClick={() => setShowResetConfirmation(false)}
								label={getLocalizedTextRaw(
									importExportSaveLocalization._cancel,
								)}
							/>
						) : null}
					</div>
				</div>
			</div>
		</>
	);
};
