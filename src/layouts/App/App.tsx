import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4,
	},
	wordsPerSentence: {
		max: 16,
		min: 4,
	},
});

import { numberWithCommas } from "../../_numbers/numberWithComma";
import {
	getDataFromLocalStorage,
	useLocalSaveData,
} from "../../components/ImportExportLocalStorage/utils/useSaveData";
import { JournalUi } from "../../components/JournalUi/JournalUi";
import { LocalizationSelect } from "../../components/LocalizationSelect/LocalizationSelect";
import { ImportExportLocalStorage } from "../../lib";

const defaultData = {
	money: 555,
	name: "Plssdfdsfayer",
};
// Runs on vite server, via yarn start
function App() {
	const saveGameData1 = useLocalSaveData(defaultData).saveGameData;
	console.log(`saveGameData1`, saveGameData1);
	return (
		<div style={{ backgroundColor: "rgba(158, 158, 158, 1)" }}>
			<LocalizationSelect onSelect={() => {}} />
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
			<ImportExportLocalStorage defaultData={defaultData} />
		</div>
	);
}
export default App;
