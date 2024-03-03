import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import { MassAppealCard } from "../../cardDecks/massAppealDeck";
import { CardHand } from "../CardHand/CardHand";
import { useCatDeckHandScore } from "../../cardDecks/hooks/useCatDeckHandScore";
import { textOutline } from "../GameCard/GameCardSx";
import { numberWithCommas } from "../../util/numberWithComma";
import { bgGradient, dealBtnDisabledStyle, dealBtnStyle } from "./catDeskSx";
import "./CatDeck.css";
import "@fontsource/nova-cut";
import "@fontsource-variable/alegreya";
import { randomArrayItem } from "../../util/randomArrayItem";
import { useSpeech } from "../../cardDecks/hooks/useSpeech";
export type DeckDealerProps = { deck: MassAppealCard[]; handSize: number };

export const CatDeckDealer: React.FC<DeckDealerProps> = ({
  deck,
  handSize,
}) => {
  const { speak, cancelSpeaking } = useSpeech();

  const level1Target = 100;
  const [runLevel, setRunLevel] = useState(1);
  const [handResults, setHandResults] = useState(0);
  const [isLevelBeaten, setIsLevelBeaten] = useState(false);
  const [levelTarget, setLevelTarget] = useState(level1Target);
  const [discardsRemainingMax, setDiscardsRemainingMax] = useState(3);
  const [discardsRemaining, setDiscardsRemaining] =
    useState(discardsRemainingMax);
  const [maxHands, setMaxHands] = useState(3);
  const [handsRemaining, setHandsRemaining] = useState(maxHands);
  const [selectedHandIndexes, setSelectedHandIndexes] = useState<number[]>([]);
  const hasSelectedCards = selectedHandIndexes.length > 0;
  const [hand, setHand] = useState<MassAppealCard[]>([]);
  const [remainingDeck, setRemainingDeck] = useState<MassAppealCard[]>([
    ...deck,
  ]);
  const [matchScore, setMatchScore] = useState(0);
  const { handScore, outcomes, multiplier, baseScore, clearOutcomes } =
    useCatDeckHandScore(hand);

  const clickDiscard = useCallback(() => {
    if (!hasSelectedCards) return;
    // reduce remaining discard plays
    setDiscardsRemaining((p) => {
      const def = 3;
      if (p === 0) return def;
      return p - 1;
    });

    // discard card in hand
    setHand((prevHand) => {
      return prevHand.filter(
        (_, index) => !selectedHandIndexes.includes(index)
      );
    });
    setSelectedHandIndexes([]);

    // draw new cards
    const discardCount = selectedHandIndexes.length;
    const shuffledDeck = [...remainingDeck].sort(() => Math.random() - 0.5);
    const draw = shuffledDeck.slice(0, discardCount);
    const updatedRemainingDeck = [...shuffledDeck.slice(discardCount)];
    setRemainingDeck(updatedRemainingDeck);

    setHand((prevHand) => {
      return [...prevHand, ...draw];
    });
  }, [hasSelectedCards, remainingDeck, selectedHandIndexes]);

  const clickPlayHands = useCallback(() => {
    // reduce remaining plays
    setHandsRemaining((p) => {
      const def = 3;
      if (p === 0) return def;
      return p - 1;
    });

    setHandResults(handScore);

    setMatchScore((p) => {
      const newMatchScore = p + handScore;
      if (newMatchScore >= levelTarget) {
        setIsLevelBeaten(true);
      }

      return newMatchScore;
    });
    setHand([]);
    const readTextString = outcomes.map((o) => `${o.headName}`).join(" ");
    cancelSpeaking();
    speak(readTextString);
  }, [cancelSpeaking, handScore, levelTarget, outcomes, speak]);

  const isNeedShuffle = remainingDeck.length < handSize;
  const isAllowDealing = isNeedShuffle || hand.length === 0;
  const dealCards = useCallback(() => {
    if (!isAllowDealing) return;
    setHandResults(0);
    clearOutcomes();
    const shuffledDeck = [...remainingDeck].sort(() => Math.random() - 0.5);
    const newHand = shuffledDeck.slice(0, handSize);
    const updatedRemainingDeck = [...shuffledDeck.slice(handSize)];
    setHand([...newHand]);
    setRemainingDeck(updatedRemainingDeck);
  }, [isAllowDealing, clearOutcomes, remainingDeck, handSize]);

  const shuffleDeck = useCallback(() => {
    setRemainingDeck(deck);
  }, [deck]);

  const restartGame = useCallback(() => {
    console.log("restartGame");
    shuffleDeck();
    setIsLevelBeaten(false);
    setHandsRemaining(maxHands);
    setLevelTarget(level1Target);
    setMatchScore(0);
    setRunLevel(1);
    clearOutcomes();
    setHandResults(0);
    setDiscardsRemaining(discardsRemainingMax);
  }, [clearOutcomes, discardsRemainingMax, maxHands, shuffleDeck]);

  const nextLevel = useCallback(() => {
    setIsLevelBeaten(false);
    setHandsRemaining(maxHands);
    setLevelTarget((p) => p * 2);
    setRunLevel((p) => p + 1);
    setDiscardsRemaining(discardsRemainingMax);
    dealCards();
  }, [dealCards, discardsRemainingMax, maxHands]);

  const isHandDealt = hand.length > 1;
  const showTurnBtns = isHandDealt && !isNeedShuffle;
  const isOutOfHands = handsRemaining === 0;
  const showNextLevelBtn = isOutOfHands || isLevelBeaten;
  const isGameOver = isOutOfHands && !isLevelBeaten;

  useEffect(() => {
    if (runLevel) speak(`Level ${runLevel}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runLevel]);
  useEffect(() => {
    if (levelTarget) speak(`Target: ${levelTarget} cats`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [levelTarget]);
  useEffect(() => {
    if (handResults) speak(`${handResults} cats join`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handResults]);
  useEffect(() => {
    if (isLevelBeaten) speak("Level Complete!");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLevelBeaten]);
  useEffect(() => {
    if (isGameOver) speak("Game Over");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGameOver]);
  return (
    <div style={deckStyle}>
      <h1
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "baseline",
          padding: 0,
          margin: 0,
          gap: 8,
          color: "pink",
          ...textOutline.black,
        }}
      >
        <span>{"Level"}</span>
        <span>{runLevel}</span>
        {isLevelBeaten ? (
          <span style={{ color: "lime", ...textOutline.black }}>
            {" Complete"}
          </span>
        ) : null}

        {isGameOver ? (
          <span
            style={{ color: "red", fontSize: "0.8em", ...textOutline.white }}
          >
            {" Game Over"}
          </span>
        ) : null}
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
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

        {!showTurnBtns ? null : (
          <button
            style={!hasSelectedCards ? dealBtnStyle : dealBtnDisabledStyle}
            onClick={() => clickPlayHands()}
          >
            {`Play Hand (${handsRemaining - 1} remaining)`}
          </button>
        )}
        {!showTurnBtns ? null : (
          <button
            style={hasSelectedCards ? dealBtnStyle : dealBtnDisabledStyle}
            onClick={() => clickDiscard()}
          >
            {`${discardsRemaining} Discard`}
          </button>
        )}
      </div>
      <MatchScore score={matchScore} target={levelTarget} />

      {handResults > 0 ? null : (
        <HandScore
          score={handScore}
          baseScore={baseScore}
          multiplier={multiplier}
        />
      )}

      <div>
        <CardHand cards={outcomes} overlap={0} chaos={0}>
          {handResults > 0 ? (
            <div>
              <h1>
                <span
                  style={{
                    ...textOutline.white,
                    color: "green",
                  }}
                >
                  {numberWithCommas(handResults)}
                </span>
                <span
                  style={{
                    ...textOutline.black,
                    color: "green",
                    fontSize: "0.8em",
                  }}
                >
                  {" Cats Join!"}
                </span>
              </h1>
            </div>
          ) : null}
        </CardHand>
      </div>
      <div>Hand</div>
      <div>
        <CardHand
          cards={hand}
          overlap={0}
          chaos={2}
          isUnSelectable={discardsRemaining === 0}
          selectedHandIndexes={selectedHandIndexes}
          setSelectedHandIndexes={setSelectedHandIndexes}
        />
      </div>
      <div>Remaining Cards: {remainingDeck.length}</div>
      <CardHand cards={remainingDeck} overlap={130} />
    </div>
  );
};
const deckStyle = {
  backgroundImage: bgGradient,
  border: `10px solid green`,
  borderRadius: "2px",
  body: {
    fontFamily: "'Nova Cut', system-ui",
  },
} as CSSProperties;

export interface HandScoreProps {
  score: number;
  baseScore: number;
  multiplier: number;
}
export const HandScore: React.FC<HandScoreProps> = ({
  baseScore,
  multiplier,
  score,
}) => {
  return (
    <div
      style={{
        borderBottom: "4px solid rgba(0,0,0,0.2)",
        borderRadius: "2px",
        textAlign: "center",
        alignItems: "baseline",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        gap: "5px",
        fontSize: "3em",
        ...textOutline.whiteHalf,
      }}
    >
      <span
        style={{
          fontSize: "0.6em",
        }}
      >
        Round:
      </span>
      <span
        style={{
          color: "pink",
          ...textOutline.blackHalf,
        }}
      >
        {numberWithCommas(baseScore)}
      </span>
      <span
        style={{
          color: "black",
          fontSize: "0.6em",
          ...textOutline.blackHalf,
        }}
      >
        x
      </span>
      <span
        style={{
          color: "grey",
          ...textOutline.blackHalf,
        }}
      >
        {`${numberWithCommas(multiplier)}`}
      </span>
      <span
        style={{
          color: "grey",
          ...textOutline.blackHalf,
          fontSize: "0.6em",
        }}
      >
        {` cats`}
      </span>
      <span
        style={{
          color: "white",
          ...textOutline.blackHalf,
        }}
      >
        =
      </span>
      <span
        style={{
          color: "green",
          ...textOutline.blackHalf,
        }}
      >
        {`${numberWithCommas(score)}`}
      </span>
      <span
        style={{
          color: "green",
          fontSize: "0.6em",
          ...textOutline.blackHalf,
        }}
      >
        {`total cats ${randomArrayItem([
          "😺",
          "😸",
          "😹",
          "😻",
          "😼",
          "😽",
          "🙀",
          "😿",
          "😾",
          "🐱",
        ])}`}
      </span>
    </div>
  );
};

export interface MatchScoreProps {
  score: number;
  target: number;
}
export const MatchScore: React.FC<MatchScoreProps> = ({ target, score }) => {
  return (
    <div
      style={{
        borderBottom: "4px solid rgba(0,0,0,0.2)",
        borderRadius: "2px",
        textAlign: "center",
        alignItems: "baseline",
        display: window.innerWidth > 400 ? "flex" : "block",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
        fontSize: "2.8em",
        ...textOutline.black,
      }}
    >
      <div>
        <span
          style={{
            fontSize: "0.6em",
            color: "green",
          }}
        >
          Total Cats:
        </span>
        <span
          style={{
            color: "green",
          }}
        >
          {` ${numberWithCommas(score)}`}
        </span>
      </div>
      <span>/</span>
      <div>
        <span
          style={{
            color: "red",
            fontSize: "0.6em",
          }}
        >
          Target:
        </span>
        <span
          style={{
            color: "red",
          }}
        >
          {` ${numberWithCommas(target)}`}
        </span>
      </div>
    </div>
  );
};
