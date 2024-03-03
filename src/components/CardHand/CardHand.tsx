import React, { ReactNode, useCallback } from "react";
import { GameCard } from "../GameCard/GameCard";
import { MassAppealCard } from "../../cardDecks/massAppealDeck";
import { rollDice } from "../../lib";

export type CardHandProps = {
  children?: ReactNode;
  cards: MassAppealCard[];
  overlap?: number;
  chaos?: number;
  selectedHandIndexes?: number[];
  isUnSelectable?: boolean;
  setSelectedHandIndexes?: React.Dispatch<React.SetStateAction<number[]>>;
};

export const CardHand: React.FC<CardHandProps> = ({
  cards = [],
  overlap = 60,
  chaos = 0,
  selectedHandIndexes,
  isUnSelectable = false,
  setSelectedHandIndexes = () => null,
  children,
}) => {
  const xPaddingSpace = window.innerWidth > 800 ? 100 : 40;

  const selectCard = useCallback(
    (index: number) => {
      if (isUnSelectable) return;
      setSelectedHandIndexes((prevIndexes) => {
        if (prevIndexes.includes(index)) {
          return prevIndexes.filter((i) => i !== index);
        } else {
          return [...prevIndexes, index];
        }
      });
    },
    [isUnSelectable, setSelectedHandIndexes]
  );

  return (
    <div>
      <div
        id="hand"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          padding: `10px ${xPaddingSpace}px`,
          minHeight: "300px",
          backgroundColor: "rgb(0,0,0,0.2)",
          border: "1px solid rgb(0,0,0,0.2)",
          borderRadius: "2px",
          gap: 2,
        }}
      >
        {cards.map((card, i) => {
          const isSelected = selectedHandIndexes?.includes(i);
          return (
            <GameCard
              key={(card?.code ? card.code : card.headName) + i}
              card={card}
              overlap={overlap}
              rotate={chaos ? rollDice(chaos) - chaos / 2 : 0}
              onClick={() => selectCard(i)}
              isSelected={isSelected}
              selectedLift={isSelected ? 60 : 0}
            />
          );
        })}
        {children}
      </div>
    </div>
  );
};
