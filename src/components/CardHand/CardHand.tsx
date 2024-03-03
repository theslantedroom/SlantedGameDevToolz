import React from "react";
import { GameCard } from "../GameCard/GameCard";
import { MassAppealCard } from "../../cardDecks/massAppealDeck";

export type CardHandProps = { cards: MassAppealCard[]; overlap: number };

export const CardHand: React.FC<CardHandProps> = ({
  cards = [],
  overlap = 60,
}) => {
  return (
    <div>
      <div
        id="hand"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "stretch",
          alignContent: "stretch",
          border: "2px solid yellow",
          padding: 10,
          minHeight: "300px",
          backgroundColor: "rgb(0,0,0,0.2)",
        }}
      >
        {cards.map((card, i) => {
          return (
            <GameCard
              key={(card?.code ? card.code : card.headName) + i}
              card={card}
              overlap={overlap}
              rotate={0}
            />
          );
        })}
      </div>
    </div>
  );
};
