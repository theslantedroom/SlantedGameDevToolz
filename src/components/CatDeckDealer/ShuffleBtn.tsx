import React from "react";
import { dealBtnDisabledStyle, dealBtnStyle } from "./catDeskSx";
import { MassAppealCard } from "../../cardDecks/massAppealDeck";
export interface Props {
  isHandDealt: boolean;
  showNextLevelBtn: boolean;
  isGameOver: boolean;
  isAllowDealing: boolean;
  shuffleDeck: () => void;
  remainingDeck: MassAppealCard[];
  nextLevel: () => void;
  isLevelBeaten: boolean;
  dealCards: () => void;
  handsRemaining: number;
  isOutOfHands: boolean;
  restartGame: () => void;
}
export const ShuffleBtn: React.FC<Props> = ({
  isHandDealt,
  shuffleDeck,
  remainingDeck,
  showNextLevelBtn,
  isAllowDealing,
  nextLevel,
  isLevelBeaten,
  isGameOver,
  dealCards,
  handsRemaining,
  restartGame,
  isOutOfHands,
}) => {
  return (
    <>
      {isHandDealt ? (
        <button style={dealBtnStyle} onClick={shuffleDeck}>
          {`Shuffle (${remainingDeck.length})`}
        </button>
      ) : (
        <div>
          {showNextLevelBtn && !isGameOver ? (
            <button
              style={isAllowDealing ? dealBtnStyle : dealBtnDisabledStyle}
              onClick={nextLevel}
            >
              {"Next Level"}
            </button>
          ) : (
            <>
              {isLevelBeaten ? (
                <button
                  style={isAllowDealing ? dealBtnStyle : dealBtnDisabledStyle}
                  onClick={dealCards}
                >
                  {`Deal (${handsRemaining} remaining)`}
                </button>
              ) : (
                <button
                  style={isAllowDealing ? dealBtnStyle : dealBtnDisabledStyle}
                  onClick={isGameOver ? restartGame : dealCards}
                >
                  {`${
                    isOutOfHands ? "Restart" : "Deal"
                  } (${handsRemaining} hands remaining)`}
                </button>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};
