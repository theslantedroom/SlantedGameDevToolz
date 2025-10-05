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

import { jsxCss } from "../../theme/jsxCssClassics";
import {
	saveStringToastConfig,
	standardToastConfig,
} from "../../theme/toastConfig";
import { HexBtn } from "../buttons/HexBtn/HexBtn";
import { getLocalizedTextRaw } from "../LocalizationSelect/useLocalization";
import { CopySaveStringToast } from "./CopySaveStringToast";
import { importExportSaveLocalization } from "./constants/ImportExportLocalization";
import { saveKeys } from "./constants/SAVE_KEYS";
import { LoadFileBtns, LoadStringBtns } from "./LoadFileBtns";
import { LoadGameInstruction } from "./LoadGameInstruction";
import { useImportExportLocalStorageActions } from "./stores/importExportLocalStorageStore";
import { cardCss } from "./style/css";
import { TextAreaSaveString } from "./TextAreaSaveString";
import {
	compressObjectWithPako,
	decompressStringWithPako,
} from "./utils/saveStringUtil";

export interface Props {
	cardBgColor?: string;
	defaultData: Record<string, any>;
}

export const ImportExportLocalStorage: React.FC<Props> = ({
	defaultData,
	cardBgColor = "#d8d8d8ff",
}) => {
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
		a.download = `mySaveFile${Date.now()}.txt`;
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
				// @ts-expect-error
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

		console.log(`importedData`, importedData);

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
				// @ts-expect-error
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
			console.log(`Initialize Data: ${JSON.stringify(defaultData)}`);
			localStorage.setItem(saveKeys.data, compressObjectWithPako(defaultData));
		}
	}, [defaultData]);

	const cardStyle = {
		...cardCss,
		background: cardBgColor,
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
					boxSizing: "border-box",
					borderRadius: "12px",
					padding: "10px",
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
						maxWidth: "440px",
					}}
				>
					{showResetConfirmation ? (
						<p id={"warning"} style={{ marginTop: "220px" }}>
							{getLocalizedTextRaw(
								importExportSaveLocalization.warningClearSave,
							)}
						</p>
					) : null}

					<div>
						{showResetConfirmation ? null : (
							<>
								<LoadGameInstruction cardBgColor={cardBgColor} />
								<div style={cardStyle}>
									<TextAreaSaveString
										saveString={saveString}
										handleChangeSaveString={handleChangeSaveString}
									/>
									<div
										style={{
											display: "flex",
											justifyContent: "space-evenly",
											flexWrap: "wrap",
											marginTop: "16px",
										}}
									>
										<LoadStringBtns
											loadGameFromString={loadGameFromString}
											exportLocalStorageAsString={exportLocalStorageAsString}
										/>
										<LoadFileBtns
											loadGameFromFile={loadGameFromFile}
											exportLocalStorageAsFile={exportLocalStorageAsFile}
										/>
									</div>
								</div>
							</>
						)}
					</div>

					<div style={cardStyle}>
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
