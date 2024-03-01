import React from "react";
import { GameCard } from "../GameCard/GameCard";
import { MassAppealCard } from "../../cardDecks/massAppealDeck";

export type TestProps = { cards: MassAppealCard[] };

export const CardHand: React.FC<TestProps> = ({ cards = [] }) => {
  return (
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
        padding: 100,
        backgroundColor: "rgb(0,0,0,0.2)",
      }}
    >
      {cards.map((card) => {
        return <GameCard card={card} overlap={60} rotate={0} />;
      })}
    </div>
  );
};
