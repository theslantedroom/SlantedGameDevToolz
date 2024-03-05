import React from "react";
import { textOutline } from "../GameCard/GameCardSx";
import { numberWithCommas } from "../../util/numberWithComma";

export interface MatchScoreProps {
  score: number;
  target: number;
}
export const MatchScore: React.FC<MatchScoreProps> = ({ target, score }) => {
  return (
    <div
      style={{
        borderBottom: "4px solid rgba(0,0,0,0.2)",
        borderRadius: "2px",
        textAlign: "center",
        alignItems: "baseline",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
        fontSize: "2em",
        fontWeight: "bold",
        ...textOutline.white,
        padding: 0,
        margin: 0,
      }}
    >
      <div>
        <span
          style={{
            fontSize: "0.6em",
            color: "green",
          }}
        >
          Total Cats:
        </span>
        <span
          style={{
            color: "green",
          }}
        >
          {` ${numberWithCommas(score)}`}
        </span>
      </div>

      <div>
        <span
          style={{
            color: "red",
            fontSize: "0.6em",
          }}
        >
          Target:
        </span>
        <span
          style={{
            color: "red",
          }}
        >
          {` ${numberWithCommas(target)}`}
        </span>
      </div>
    </div>
  );
};
