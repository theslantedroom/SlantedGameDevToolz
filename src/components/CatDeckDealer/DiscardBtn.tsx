import React from "react";
import { dealBtnDisabledStyle, dealBtnStyle } from "./catDeskSx";
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
  return (
    <>
      {!showTurnBtns ? null : (
        <button
          style={hasSelectedCards ? dealBtnStyle : dealBtnDisabledStyle}
          onClick={() => clickDiscard()}
        >
          {`${discardsRemaining} Discard`}
        </button>
      )}
    </>
  );
};
