import React from "react";
import { GameCard } from "../GameCard/GameCard";
import { MassAppealCard } from "../../cardDecks/massAppealDeck";
import { rollDice } from "../../lib";

export type CardHandProps = {
  cards: MassAppealCard[];
  overlap?: number;
  chaos?: number;
  xPaddingSpace?: number;
};

export const CardHand: React.FC<CardHandProps> = ({
  cards = [],
  overlap = 60,
  chaos = 0,
}) => {
  const xPaddingSpace = window.innerWidth > 800 ? 100 : 40;

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
          return (
            <GameCard
              key={(card?.code ? card.code : card.headName) + i}
              card={card}
              overlap={overlap}
              rotate={chaos ? rollDice(chaos) - chaos / 2 : 0}
            />
          );
        })}
      </div>
    </div>
  );
};
