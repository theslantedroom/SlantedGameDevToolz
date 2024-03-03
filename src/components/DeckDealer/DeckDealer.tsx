import React, { CSSProperties, useState } from "react";
import { MassAppealCard } from "../../cardDecks/massAppealDeck";
import { CardHand } from "../CardHand/CardHand";
import { useCatDeckHandScore } from "../../cardDecks/hooks/useCatDeckHandScore";
import { textOutline } from "../GameCard/GameCardSx";
import { numberWithCommas } from "../../util/numberWithComma";

export type DeckDealerProps = { deck: MassAppealCard[]; handSize: number };

export const DeckDealer: React.FC<DeckDealerProps> = ({ deck, handSize }) => {
  const [dealtCards, setDealtCards] = useState<number>(0);
  const [hand, setHand] = useState<MassAppealCard[]>([]);
  const [remainingDeck, setRemainingDeck] = useState<MassAppealCard[]>([
    ...deck,
  ]);
  const { score, outcomes, multiplier, baseScore, clearOutcomes } =
    useCatDeckHandScore(hand);

  const style = {} as CSSProperties;
  const isNeedShuffle = remainingDeck.length < handSize;
  const dealCards = () => {
    clearOutcomes();
    if (isNeedShuffle) {
      setRemainingDeck(deck);
      setHand([]);
      setDealtCards(0);
      console.log("Not enough cards in the deck");
      return;
    }

    const shuffledDeck = [...remainingDeck].sort(() => Math.random() - 0.5);
    const newHand = shuffledDeck.slice(0, handSize);
    const updatedRemainingDeck = [...remainingDeck.slice(handSize)];

    setDealtCards(dealtCards + handSize);
    setHand([...newHand]);
    setRemainingDeck(updatedRemainingDeck);
  };

  return (
    <div style={style}>
      <button onClick={dealCards}>{isNeedShuffle ? "Shuffle" : "Deal"}</button>
      <div>Dealt Cards: {dealtCards}</div>
      <h1>
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
        <CardHand cards={outcomes} overlap={0} />
      </div>
      <div>Hand</div>
      <div>
        <CardHand cards={hand} overlap={0} />
      </div>
      <div>Remaining Cards: {remainingDeck.length}</div>
      <CardHand cards={remainingDeck} />
    </div>
  );
};
