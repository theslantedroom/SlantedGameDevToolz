import React from "react";
import { dealBtnDisabledStyle, dealBtnStyle } from "./style/catDeskSx";
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
  runScore: number;
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
  dealCards,
  handsRemaining,
  restartGame,
  isOutOfHands,
  runScore,
}) => {
  const dealTxt = runScore === 0 ? "Deal" : "Next Round";
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
                  {`${dealTxt} (${handsRemaining} remaining)`}
                </button>
              ) : (
                <button
                  style={isAllowDealing ? dealBtnStyle : dealBtnDisabledStyle}
                  onClick={isGameOver ? restartGame : dealCards}
                >
                  {`${
                    isOutOfHands ? "Restart" : dealTxt
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
