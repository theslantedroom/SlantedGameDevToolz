import React from "react";
import { textOutline } from "../GameCard/GameCardSx";
import { CatCard } from "../../cardDecks/catsDeck";

export interface MatchScoreProps {
  hand: CatCard[];
}
export const HandFooter: React.FC<MatchScoreProps> = ({ hand }) => {
  if (hand?.length === 0) {
    return null;
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        background: "rgba(0,0,0,0.2)",
        border: "1px solid green",
        borderRadius: "10px",
        margin: "4px 0 30px 0",
        color: "white",
        ...textOutline.blackHalf,
      }}
    >
      Select 3 Cards
    </div>
  );
};
