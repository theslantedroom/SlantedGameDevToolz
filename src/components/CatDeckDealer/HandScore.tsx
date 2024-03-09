import React from "react";
import { textOutline } from "../GameCard/GameCardSx";
import { numberWithCommas } from "../../util/numberWithComma";
import { randomArrayItem } from "../../util/randomArrayItem";
import { catMultiColor } from "./style/catDeskSx";
import { addPluralS } from "../GamePad/hooks/useAddPlural";

export interface HandScoreProps {
  score: number;
  baseScore: number;
  multiplier: number;
  runScore: number;
}
export const HandScore: React.FC<HandScoreProps> = ({
  baseScore,
  multiplier,
  score,
  runScore,
}) => {
  if (runScore === 0) return null;
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
        gap: "5px",
        fontSize: "3em",
        ...textOutline.whiteHalf,
      }}
    >
      <span
        style={{
          color: catMultiColor,
          ...textOutline.black,
          fontSize: "0.6em",
        }}
      >
        {` cats`}
      </span>
      <span
        style={{
          color: catMultiColor,
          ...textOutline.black,
        }}
      >
        {`${numberWithCommas(baseScore)}`}
      </span>
      <span
        style={{
          color: "lime",
          fontSize: "0.6em",
          ...textOutline.black,
        }}
      >
        x
      </span>
      <span
        style={{
          color: "lime",
          ...textOutline.black,
        }}
      >
        {numberWithCommas(multiplier)}
      </span>
      {/* = */}
      <div
        style={{
          color: "white",
          ...textOutline.blackHalf,
        }}
      >
        =
      </div>
      {/* TOTAL */}
      <span
        style={{
          color: "green",
          ...textOutline.blackHalf,
        }}
      >
        {`${numberWithCommas(score)}`}
      </span>
      <span
        style={{
          color: "green",
          fontSize: "0.6em",
          ...textOutline.blackHalf,
        }}
      >
        {`cat${addPluralS(score)} ${randomArrayItem([
          "😺",
          "😸",
          "😹",
          "😻",
          "😼",
          "😽",
          "🙀",
          "😿",
          "😾",
          "🐱",
        ])}`}
      </span>
    </div>
  );
};
