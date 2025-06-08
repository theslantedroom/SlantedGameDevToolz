import type React from "react";
import { useState } from "react";
import "./JournalUi.css";
export type Props = {
	pageTitles: string[];
	pageContents: React.ReactNode[];
	showFooter: boolean;
	showFooterText?: boolean;
};

export const JournalUi: React.FC<Props> = ({
	pageTitles = [],
	pageContents = [],
	showFooter = false,
	showFooterText = false,
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
					{showFooter && showFooterText && (
						<span>
							Page {currentPage + 1} of {pageTitles.length}
						</span>
					)}
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
