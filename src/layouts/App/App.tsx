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
import { JournalUi } from "../../components/JournalUi/JournalUi";
import { LocalizationSelect } from "../../components/LocalizationSelect/LocalizationSelect";
import { ImportExportLocalStorage } from "../../lib";

const defaultData = {};
// Runs on vite server, via yarn start
function App() {
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
