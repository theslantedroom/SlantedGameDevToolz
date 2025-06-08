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

import type React from "react";
import { useState } from "react";
import "./JournalUi.css";
export type Props = {
	pageTitles?: string[];
	pageContents?: React.ReactNode[];
	showFooter?: boolean;
};

export const JournalUi: React.FC<Props> = ({
	pageTitles = ["Character", "Magic", "Items", "Skills"],
	pageContents = [
		<div>{lorem.generateParagraphs(1)}</div>,
		<div>{lorem.generateParagraphs(2)}</div>,
		<div>{lorem.generateParagraphs(3)}</div>,
		<div>{lorem.generateParagraphs(4)}</div>,
	],
	showFooter = false,
}) => {
	const [currentPage, setCurrentPage] = useState(0);

	const handlePrev = () => {
		setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
	};

	const handleNext = () => {
		setCurrentPage((prev) => (prev < pageTitles.length - 1 ? prev + 1 : prev));
	};

	return (
		<div className="journal-book">
			<div className="journal-tabs">
				{pageTitles.map((title, index) => (
					<button
						key={index}
						className={`journal-tab ${currentPage === index ? "active" : ""}`}
						onClick={() => setCurrentPage(index)}
					>
						{title}
					</button>
				))}
			</div>

			<div className="journal-content">{pageContents[currentPage]}</div>
			{showFooter && (
				<div className="journal-navigation">
					<button onClick={handlePrev} disabled={currentPage === 0}>
						Previous
					</button>
					<span>
						Page {currentPage + 1} of {pageTitles.length}
					</span>
					<button
						onClick={handleNext}
						disabled={currentPage === pageTitles.length - 1}
					>
						Next
					</button>
				</div>
			)}
		</div>
	);
};
