import type { CSSProperties } from "react";
import { useIsLoadingLocalStorage } from "../../components/ImportExportLocalStorage/stores/importExportLocalStorageStore";
import { LocalizationSelect } from "../../components/LocalizationSelect/LocalizationSelect";
import { ImportExportLocalStorage, useLocalSaveData } from "../../lib";
import { colors } from "../../theme/palettes/colors";

const defaultData = {
	money: 555,
	name: "Player",
};
// Runs on vite server, via yarn start
function App() {
	const isLoading = useIsLoadingLocalStorage();

	const { saveGameData } = useLocalSaveData({ coins: 0 });

	console.log(`saveGameData`, saveGameData);
	return (
		<div style={{ backgroundColor: "rgba(158, 158, 158, 1)" }}>
			<LocalizationSelect
				onSelect={() => {}}
				size={50}
				fontColor="black"
				hideTitle
			/>
			{/* <JournalUi
				pageContents={[
					<div>{numberWithCommas(1_000_000, true)}</div>,
					<div>{lorem.generateParagraphs(2)}</div>,
					<div>{lorem.generateParagraphs(3)}</div>,
					<div>{lorem.generateParagraphs(4)}</div>,
				]}
				pageTitles={["Million", "2", "3", "4"]}
				showFooter={false}
			/> */}
			<ImportExportLocalStorage
				defaultData={defaultData}
				hideUi={false}
				cardCssOverride={importExportCardOverride}
				btnCssOverride={importExportBtnOverride}
				showInstructions={false}
				cardBgColor={importExportCardBg}
				instructionCssOverride={{ color: "white", textShadow: undefined }}
			/>
		</div>
	);
}
export default App;

export const importExportCardOverride: CSSProperties = {
	borderRadius: "12px",
	border: `3px solid ${colors.absoluteBlack}`,
	boxShadow: `0 4px 12px ${colors.blackestBlack}`,
	margin: "8px",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
};

export const importExportBtnOverride: CSSProperties = {
	background: `linear-gradient(${colors.redBoxerDark}, ${colors.redBoxerDark2})`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
	borderRadius: "8px",
	border: `3px solid ${colors.absoluteBlack}`,
	boxShadow: `0 4px 12px ${colors.blackestBlack}`,
	color: colors.white,
	fontFamily: "Kitty",
	fontSize: "16px",
	textShadow: "0 1px 2px rgba(0,0,0,0.85)",
};

export const importExportCardBg = `linear-gradient(${colors.redBoxerDark2}, ${colors.redBoxerLight}), ${colors.redBoxerPinkRed}`;
