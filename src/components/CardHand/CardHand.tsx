import React from "react";
import { GameCard } from "../GameCard/GameCard";
export type GameCard = {
  headName: string;
  shortname: string;
  code: string;
  a: string;
  b: string;
  c: string;
};
export type TestProps = { cards: GameCard[] };

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
        return (
          <GameCard
            infoSection={card.shortname}
            head={card.headName}
            overlap={60}
            rotate={0}
          />
        );
      })}
    </div>
  );
};
