import React from "react";
import { dealBtnDisabledStyle, dealBtnStyle } from "./style/catDeskSx";
import { selectedGreenGlow } from "../GameCard/GameCardSx";
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
  const sx = hasSelectedCards ? dealBtnStyle : dealBtnDisabledStyle;
  const _handsRemaining = handsRemaining - 1;

  return (
    <>
      {!showTurnBtns ? null : (
        <button
          style={{
            ...sx,
            boxShadow: !hasSelectedCards ? selectedGreenGlow : "initial",
          }}
          onClick={() => clickPlayHand()}
        >
          {`Meow OK! (${_handsRemaining})`}
        </button>
      )}
    </>
  );
};
