import React from "react";
import { dealBtnDisabledStyle, dealBtnStyle } from "./catDeskSx";
export interface Props {
  clickPlayHands: () => void;
  handsRemaining: number;
  hasSelectedCards: boolean;
  showTurnBtns: boolean;
}
export const PlayHandBtn: React.FC<Props> = ({
  clickPlayHands,
  handsRemaining,
  hasSelectedCards,
  showTurnBtns,
}) => {
  return (
    <>
      {!showTurnBtns ? null : (
        <button
          style={!hasSelectedCards ? dealBtnStyle : dealBtnDisabledStyle}
          onClick={() => clickPlayHands()}
        >
          {`Play Hand (${handsRemaining - 1} remaining)`}
        </button>
      )}
    </>
  );
};
