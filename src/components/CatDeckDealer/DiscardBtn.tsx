import React from "react";
import { dealBtnDisabledStyle, dealBtnStyle } from "./style/catDeskSx";
import { selectedBabyBlueGlow } from "../GameCard/GameCardSx";
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
  const isEnabled = discardsRemaining >= 1 && hasSelectedCards;
  const sx = isEnabled ? dealBtnStyle : dealBtnDisabledStyle;
  const text = `Replace (${discardsRemaining})`;

  return (
    <>
      {!showTurnBtns ? null : (
        <button
          style={{
            ...sx,
            boxShadow: isEnabled ? selectedBabyBlueGlow : "initial",
          }}
          onClick={() => clickDiscard()}
        >
          {text}
        </button>
      )}
    </>
  );
};
