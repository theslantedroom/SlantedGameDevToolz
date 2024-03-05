import React from "react";
import { textOutline } from "../GameCard/GameCardSx";
import { numberWithCommas } from "../../util/numberWithComma";
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
        margin: 20,
        borderRadius: "10px",
      }}
    >
      Click Cards to replace
    </div>
  );
};
