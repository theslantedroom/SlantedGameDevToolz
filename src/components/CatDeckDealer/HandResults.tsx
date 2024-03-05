import React from "react";
import { textOutline } from "../GameCard/GameCardSx";
import { numberWithCommas } from "../../util/numberWithComma";
export interface Props {
  lastHandScore: number;
  levelTarget: number;
  isLevelBeaten: boolean;
}
export const HandResults: React.FC<Props> = ({
  lastHandScore,
  levelTarget,
  isLevelBeaten,
}) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          gap: 10,
        }}
      >
        <h1 style={{ padding: 0, margin: "10px 0 0 0" }}>
          <span
            style={{
              ...textOutline.white,
              color: "green",
            }}
          >
            {numberWithCommas(lastHandScore)}
          </span>
          <span
            style={{
              ...textOutline.black,
              color: "lime",
              fontSize: "0.8em",
            }}
          >
            {" Cats Join!"}
          </span>
        </h1>
      </div>
      {isLevelBeaten ? null : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            gap: 10,
          }}
        >
          <h1 style={{ padding: 0, margin: 0 }}>
            <span
              style={{
                ...textOutline.black,
                color: "red",
                fontSize: "0.8em",
              }}
            >
              {"need "}
            </span>
            <span
              style={{
                ...textOutline.white,
                color: "red",
              }}
            >
              {numberWithCommas(levelTarget - lastHandScore)}
            </span>
            <span
              style={{
                ...textOutline.black,
                color: "red",
                fontSize: "0.8em",
              }}
            >
              {" more...."}
            </span>
          </h1>
        </div>
      )}
    </div>
  );
};
