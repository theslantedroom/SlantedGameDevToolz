import React from "react";
import { dealBtnDisabledStyle, dealBtnStyle } from "./catDeskSx";
import { selectedGlow } from "../GameCard/GameCardSx";
export interface Props {
  clickPlayHand: () => void;
  handsRemaining: number;
  hasSelectedCards: boolean;
  showTurnBtns: boolean;
}
export const PlayHandBtn: React.FC<Props> = ({
  clickPlayHand,
  handsRemaining,
  hasSelectedCards,
  showTurnBtns,
}) => {
  const sx = !hasSelectedCards ? dealBtnStyle : dealBtnDisabledStyle;

  return (
    <>
      {!showTurnBtns ? null : (
        <button
          style={{
            ...sx,
            boxShadow: !hasSelectedCards ? selectedGlow : "initial",
          }}
          onClick={() => clickPlayHand()}
        >
          {`Play Hand (${handsRemaining - 1})`}
        </button>
      )}
    </>
  );
};
