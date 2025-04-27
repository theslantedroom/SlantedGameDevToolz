import type React from "react";
import { type ReactNode, useCallback, useMemo } from "react";
import type { CatCard } from "../../cardDecks/catsDeck";
import { rollDice } from "../../lib";
import { GameCard } from "../GameCard/GameCard";

export type CardHandProps = {
	children?: ReactNode;
	cards: CatCard[];
	overlap?: number;
	chaos?: number;
	selectedHandIndexes?: number[];
	selectedLift?: number;
	scale?: number;
	isUnSelectable?: boolean;
	setSelectedHandIndexes?: React.Dispatch<React.SetStateAction<number[]>>;
	setSelectedHand?: React.Dispatch<React.SetStateAction<CatCard[]>>;
};

export const CardHand: React.FC<CardHandProps> = ({
	cards = [],
	overlap = 60,
	chaos = 0,
	selectedHandIndexes,
	isUnSelectable = false,
	setSelectedHandIndexes = () => null,
	setSelectedHand = () => null,
	selectedLift,
	children,
	scale = 1,
}) => {
	const selectCard = useCallback(
		({ index, card }: { index: number; card: CatCard }) => {
			if (isUnSelectable) return;
			setSelectedHandIndexes((prevIndexes) => {
				if (prevIndexes.includes(index)) {
					return prevIndexes.filter((i) => i !== index);
				} else {
					return [...prevIndexes, index];
				}
			});

			setSelectedHand((prevSelectedHand) => {
				const isCodeExisting = prevSelectedHand.some((c) => {
					return c.code === card.code;
				});

				if (!isCodeExisting) {
					return [...prevSelectedHand, card];
				} else {
					// If the card's 'code' exists, remove it from selectedHand
					return prevSelectedHand.filter((c) => c.code !== card.code);
				}
			});
		},
		[isUnSelectable, setSelectedHand, setSelectedHandIndexes],
	);

	const _overlap = useMemo(() => {
		if (cards.length >= 6) {
			return overlap + 25;
		}
		if (cards.length === 5) {
			return overlap + 20;
		}
		return overlap;
	}, [cards.length, overlap]);
	return (
		<div>
			<div
				id="hand"
				style={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					justifyContent: "center",
					alignContent: "baseline",
					alignItems: "center",
					padding: `${0}px ${0}px`,
					margin: `${0}px ${0}px`,
					backgroundColor: "rgb(0,0,0,0.2)",
					border: "1px solid rgb(0,0,0,0.2)",
					borderRadius: "2px",
				}}
			>
				{cards.map((card, i) => {
					const isSelected = selectedHandIndexes?.includes(i);
					return (
						<GameCard
							scale={scale}
							key={(card?.code ? card.code : card.headName) + i}
							card={card}
							overlap={_overlap}
							rotate={chaos ? rollDice(chaos) - chaos / 2 : 0}
							onClick={() => {
								selectCard({ index: i, card });
							}}
							isSelected={isSelected}
							selectedLift={isSelected ? selectedLift : 0}
						/>
					);
				})}
				<div style={{ width: "100%" }}> {children}</div>
			</div>
		</div>
	);
};
