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

import { JournalUi } from "../../components/JournalUi/JournalUi";
// Runs on vite server, via yarn start
function App() {
	return (
		<>
			<JournalUi
				pageContents={[
					<div>{lorem.generateParagraphs(1)}</div>,
					<div>{lorem.generateParagraphs(2)}</div>,
					<div>{lorem.generateParagraphs(3)}</div>,
					<div>{lorem.generateParagraphs(4)}</div>,
				]}
				pageTitles={["1", "2", "3", "4"]}
				showFooter={false}
			/>
		</>
	);
}
export default App;
