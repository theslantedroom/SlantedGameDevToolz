import React, { CSSProperties, useCallback, useState } from "react";
import { MassAppealCard } from "../../cardDecks/massAppealDeck";
import { CardHand } from "../CardHand/CardHand";
import { useCatDeckHandScore } from "../../cardDecks/hooks/useCatDeckHandScore";
import { textOutline } from "../GameCard/GameCardSx";
import { numberWithCommas } from "../../util/numberWithComma";
import { bgGradient, dealBtnDisabledStyle, dealBtnStyle } from "./catDeskSx";
import "./CatDeck.css";
import "@fontsource/nova-cut";
import "@fontsource-variable/alegreya";
export type DeckDealerProps = { deck: MassAppealCard[]; handSize: number };

export const CatDeckDealer: React.FC<DeckDealerProps> = ({
  deck,
  handSize,
}) => {
  const [discardsRemaining, setDiscardsRemaining] = useState(3);
  const [handsRemaining, setHandsRemaining] = useState(3);
  const [selectedHandIndexes, setSelectedHandIndexes] = useState<number[]>([]);
  const hasSelectedCards = selectedHandIndexes.length > 0;
  const [roundScore, setRoundScore] = useState();
  const [dealtCards, setDealtCards] = useState<MassAppealCard[]>([]);
  const [hand, setHand] = useState<MassAppealCard[]>([]);
  const [remainingDeck, setRemainingDeck] = useState<MassAppealCard[]>([
    ...deck,
  ]);
  const { score, outcomes, multiplier, baseScore, clearOutcomes } =
    useCatDeckHandScore(hand);

  const clickDiscard = useCallback(() => {
    if (!hasSelectedCards) return;
    setDiscardsRemaining((p) => {
      const def = 3;
      if (p === 0) return def;
      return p - 1;
    });
  }, [hasSelectedCards]);
  const clickHands = useCallback(() => {}, []);

  const isNeedShuffle = remainingDeck.length < handSize;
  const isAllowDealing = isNeedShuffle || hand.length === 0;

  const dealCards = useCallback(() => {
    if (!isAllowDealing) return;
    clearOutcomes();
    if (isNeedShuffle) {
      setRemainingDeck(deck);
      setHand([]);
      setDealtCards([]);
      console.log("Not enough cards in the deck");
      return;
    }

    const shuffledDeck = [...remainingDeck].sort(() => Math.random() - 0.5);
    const newHand = shuffledDeck.slice(0, handSize);
    const updatedRemainingDeck = [...shuffledDeck.slice(handSize)];

    setDealtCards((p) => [...p, ...newHand]);
    setHand([...newHand]);
    setRemainingDeck(updatedRemainingDeck);
  }, [
    clearOutcomes,
    deck,
    handSize,
    isAllowDealing,
    isNeedShuffle,
    remainingDeck,
  ]);

  const isHandDealt = hand.length > 1;
  const showTurnBtns = isHandDealt && !isNeedShuffle;
  return (
    <div style={deckStyle}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <button
          style={isAllowDealing ? dealBtnStyle : dealBtnDisabledStyle}
          onClick={() => dealCards()}
        >
          {"Deal"}
        </button>
        {!showTurnBtns ? null : (
          <button
            style={!hasSelectedCards ? dealBtnStyle : dealBtnDisabledStyle}
            onClick={() => clickHands()}
          >
            {`${handsRemaining} Play`}
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
      <Score score={score} baseScore={baseScore} multiplier={multiplier} />
      <div>
        <CardHand cards={outcomes} overlap={0} chaos={0} />
      </div>
      <div>Hand</div>
      <div>
        <CardHand
          cards={hand}
          overlap={0}
          chaos={2}
          selectedHandIndexes={selectedHandIndexes}
          setSelectedHandIndexes={setSelectedHandIndexes}
        />
      </div>
      <div style={{ margin: "auto" }}>Dealt Cards: {dealtCards.length}</div>
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

export interface Props {
  score: number;
  baseScore: number;
  multiplier: number;
}
export const Score: React.FC<Props> = ({ baseScore, multiplier, score }) => {
  return (
    <div
      style={{
        borderBottom: "4px solid rgba(0,0,0,0.2)",
        borderRadius: "2px",
        textAlign: "center",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        gap: "5px",
        fontSize: "3em",
        ...textOutline.whiteHalf,
      }}
    >
      <span>Score:</span>
      <span
        style={{
          color: "white",
          ...textOutline.blackHalf,
        }}
      >
        {numberWithCommas(baseScore)}
      </span>
      <span
        style={{
          color: "black",
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
        {numberWithCommas(multiplier)}
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
        {`${numberWithCommas(score)} cats`}
      </span>
    </div>
  );
};
