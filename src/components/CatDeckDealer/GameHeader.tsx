import React from "react";
import { textOutline } from "../GameCard/GameCardSx";
export interface Props {
  runLevel: number;
  isLevelBeaten: boolean;
  isGameOver: boolean;
}
export const GameHeader: React.FC<Props> = ({
  runLevel,
  isLevelBeaten,
  isGameOver,
}) => {
  return (
    <h1
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline",
        padding: 0,
        margin: 0,
        gap: 8,
        color: "pink",
        ...textOutline.black,
      }}
    >
      <span>{"Level"}</span>
      <span>{runLevel}</span>
      {isLevelBeaten ? (
        <span style={{ color: "lime", ...textOutline.black }}>
          {" Complete"}
        </span>
      ) : null}

      {isGameOver ? (
        <span style={{ color: "red", fontSize: "0.8em", ...textOutline.white }}>
          {" Game Over"}
        </span>
      ) : null}
    </h1>
  );
};
