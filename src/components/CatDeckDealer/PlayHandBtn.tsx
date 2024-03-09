import React from "react";
import { dealBtnDisabledStyle, dealBtnStyle } from "./style/catDeskSx";
import { selectedGreenGlow } from "../GameCard/GameCardSx";
import { CatCard } from "../../cardDecks/catsDeck";
export interface Props {
  clickPlayHand: () => void;
  handsRemaining: number;
  showTurnBtns: boolean;
  selectedHand: CatCard[];
}
export const PlayHandBtn: React.FC<Props> = ({
  clickPlayHand,
  handsRemaining,
  showTurnBtns,
  selectedHand,
}) => {
  const isEnabled = selectedHand.length === 3;
  const sx = isEnabled ? dealBtnStyle : dealBtnDisabledStyle;
  const _handsRemaining = handsRemaining - 1;

  return (
    <>
      {!showTurnBtns ? null : (
        <button
          disabled={!isEnabled}
          style={{
            ...sx,
            boxShadow: isEnabled ? selectedGreenGlow : "initial",
          }}
          onClick={() => clickPlayHand()}
        >
          {`Meow OK! (${_handsRemaining})`}
        </button>
      )}
    </>
  );
};
