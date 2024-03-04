import React from "react";
import { textOutline } from "../GameCard/GameCardSx";
import { numberWithCommas } from "../../util/numberWithComma";
export interface Props {
  handResults: number;
  isHandInPlay: boolean;
}
export const HandResults: React.FC<Props> = ({ handResults, isHandInPlay }) => {
  return (
    <>
      {isHandInPlay ? (
        <div>
          <h1>
            <span
              style={{
                ...textOutline.white,
                color: "green",
              }}
            >
              {numberWithCommas(handResults)}
            </span>
            <span
              style={{
                ...textOutline.black,
                color: "green",
                fontSize: "0.8em",
              }}
            >
              {" Cats Join!"}
            </span>
          </h1>
        </div>
      ) : null}
    </>
  );
};
