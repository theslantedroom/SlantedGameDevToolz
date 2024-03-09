import React from "react";
import { dealBtnDisabledStyle, dealBtnStyle } from "./style/catDeskSx";
import { MassAppealCard } from "../../cardDecks/massAppealDeck";
import { selectedGreenGlow } from "../GameCard/GameCardSx";
export interface Props {
  isHandDealt: boolean;
  showNextLevelBtn: boolean;
  isGameOver: boolean;
  isAllowDealing: boolean;
  shuffleDeck: () => void;
  remainingDeck: MassAppealCard[];
  nextLevel: () => void;
  isLevelBeaten: boolean;
  nextHand: () => void;
  handsRemaining: number;
  levelScore: number;
  isOutOfHands: boolean;
  restartGame: () => void;
}
export const ShuffleDealBtn: React.FC<Props> = ({
  isHandDealt,
  shuffleDeck,
  remainingDeck,
  showNextLevelBtn,
  isAllowDealing,
  nextLevel,
  isLevelBeaten,
  isGameOver,
  nextHand,
  handsRemaining,
  restartGame,
  isOutOfHands,
  levelScore,
}) => {
  const dealTxt = levelScore === 0 ? "Deal" : "Next Turn";
  return (
    <>
      {isHandDealt ? (
        <button style={dealBtnStyle} onClick={shuffleDeck}>
          {`Shuffle Deck (${remainingDeck.length})`}
        </button>
      ) : (
        <div>
          {showNextLevelBtn && !isGameOver ? (
            <button
              style={{
                ...(isAllowDealing ? dealBtnStyle : dealBtnDisabledStyle),
                boxShadow: selectedGreenGlow,
              }}
              onClick={nextLevel}
            >
              {"Next Level"}
            </button>
          ) : (
            <>
              {isLevelBeaten ? (
                <button
                  style={{
                    ...(isAllowDealing ? dealBtnStyle : dealBtnDisabledStyle),
                    boxShadow: selectedGreenGlow,
                  }}
                  onClick={nextHand}
                >
                  {`${dealTxt} (${handsRemaining} remaining)`}
                </button>
              ) : (
                <button
                  style={{
                    ...(isAllowDealing ? dealBtnStyle : dealBtnDisabledStyle),
                    boxShadow: selectedGreenGlow,
                  }}
                  onClick={isGameOver ? restartGame : nextHand}
                >
                  {`${
                    isOutOfHands ? "Restart" : dealTxt
                  } (${handsRemaining} remaining)`}
                </button>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};
