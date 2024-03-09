import React from "react";
import { dealBtnDisabledStyle, dealBtnStyle } from "./style/catDeskSx";
import { selectedRedGlow } from "../GameCard/GameCardSx";
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
  const text = hasSelectedCards ? `Replace (${discardsRemaining})` : "Replace";

  return (
    <>
      {!showTurnBtns ? null : (
        <button
          style={{
            ...sx,
            boxShadow: selectedRedGlow,
          }}
          onClick={() => clickDiscard()}
        >
          {text}
        </button>
      )}
    </>
  );
};
