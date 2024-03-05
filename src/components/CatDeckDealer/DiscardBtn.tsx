import React from "react";
import { dealBtnDisabledStyle, dealBtnStyle } from "./catDeskSx";
import { selectedGlow } from "../GameCard/GameCardSx";
export interface Props {
  clickDiscard: () => void;
  discardsRemaining: number;
  hasSelectedCards: boolean;
  showTurnBtns: boolean;
}
export const DiscardBtn: React.FC<Props> = ({
  clickDiscard,
  discardsRemaining,
  hasSelectedCards,
  showTurnBtns,
}) => {
  const sx = hasSelectedCards ? dealBtnStyle : dealBtnDisabledStyle;
  const text = hasSelectedCards
    ? `Replace (${discardsRemaining})`
    : "select to replace";
  return (
    <>
      {!showTurnBtns ? null : (
        <button
          style={{
            ...sx,
            boxShadow: hasSelectedCards ? selectedGlow : "initial",
          }}
          onClick={() => clickDiscard()}
        >
          {text}
        </button>
      )}
    </>
  );
};
