import { useIsLoadingLocalStorage } from "../../components/ImportExportLocalStorage/stores/importExportLocalStorageStore";
import { LocalizationSelect } from "../../components/LocalizationSelect/LocalizationSelect";
import { ImportExportLocalStorage, useLocalSaveData } from "../../lib";

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
			<ImportExportLocalStorage defaultData={defaultData} hideUi />
		</div>
	);
}
export default App;
