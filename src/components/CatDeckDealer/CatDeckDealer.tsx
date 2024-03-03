import React, { CSSProperties, useCallback, useMemo, useState } from "react";
import { MassAppealCard } from "../../cardDecks/massAppealDeck";
import { CardHand } from "../CardHand/CardHand";
import { useCatDeckHandScore } from "../../cardDecks/hooks/useCatDeckHandScore";
import { textOutline } from "../GameCard/GameCardSx";
import { numberWithCommas } from "../../util/numberWithComma";

export type DeckDealerProps = { deck: MassAppealCard[]; handSize: number };

export const CatDeckDealer: React.FC<DeckDealerProps> = ({
  deck,
  handSize,
}) => {
  const [dealtCards, setDealtCards] = useState<MassAppealCard[]>([]);
  const [hand, setHand] = useState<MassAppealCard[]>([]);
  const [remainingDeck, setRemainingDeck] = useState<MassAppealCard[]>([
    ...deck,
  ]);
  const { score, outcomes, multiplier, baseScore, clearOutcomes } =
    useCatDeckHandScore(hand);
  const bgGradient =
    "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)";
  const bgGradientGrass =
    "background-image: linear-gradient(to bottom, #013a00, #23630a, #4a8f12, #76bc15, #a8eb12);";
  const dealBtnStyle = {
    display: "flex",
    alignItems: "center",
    fontFamily: "inherit",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "17px",
    padding: "0.8em 1.5em",
    color: "white",
    background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
    border: "none",
    letterSpacing: "0.05em",
    borderRadius: "16px",
    margin: "auto",
  };
  const style = {
    backgroundImage: bgGradient,
    border: `10px solid green`,
    borderRadius: "2px",
  } as CSSProperties;
  const isNeedShuffle = remainingDeck.length < handSize;

  const dealCards = useCallback(() => {
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
  }, [clearOutcomes, deck, handSize, isNeedShuffle, remainingDeck]);

  return (
    <div style={style}>
      <button style={dealBtnStyle} onClick={() => dealCards()}>
        {isNeedShuffle ? "Shuffle" : "Deal"}
      </button>
      <h1
        style={{
          borderBottom: "4px solid rgba(0,0,0,0.2)",
          borderRadius: "2px",
          textAlign: "center",
        }}
      >
        {`score: ${baseScore} x ${multiplier} = `}
        <span
          style={{
            color: "green",
            fontSize: "1.5em",
            ...textOutline.blackHalf,
          }}
        >
          {numberWithCommas(score)}
        </span>
      </h1>
      <div>
        <CardHand cards={outcomes} overlap={0} chaos={0} />
      </div>
      <div>Hand</div>
      <div>
        <CardHand cards={hand} overlap={0} chaos={6} />
      </div>
      <div style={{ margin: "auto" }}>Dealt Cards: {dealtCards.length}</div>
      <div>Remaining Cards: {remainingDeck.length}</div>
      <CardHand cards={remainingDeck} overlap={130} />
    </div>
  );
};
