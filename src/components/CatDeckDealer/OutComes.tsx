import React, { useMemo } from "react";
import { CardHand } from "../CardHand/CardHand";
import { CatCard, DeckModCard, OutcomesCard } from "../../cardDecks/catsDeck";
import { HandResults } from "./HandResults";
import { textOutline } from "../GameCard/GameCardSx";
export interface Props {
  outcomes: OutcomesCard[];
  modCards: DeckModCard[];
  lastOutcomes: OutcomesCard[];
  lastHand: CatCard[];
  isHandInPlay: boolean;
  isLevelBeaten: boolean;
  lastHandScore: number;
  overlap: number;
  runScore: number;
  levelTarget: number;
}
export const OutComes: React.FC<Props> = ({
  outcomes,
  modCards,
  lastOutcomes,
  isHandInPlay,
  lastHandScore,
  lastHand,
  overlap,
  runScore,
  levelTarget,
  isLevelBeaten,
}) => {
  const outcomesChips = useMemo(() => {
    const _outcomesChips = outcomes.map((o, i) => (
      // MultiChip
      <div
        key={i + o.headName}
        style={{
          justifyContent: "center",
          background: "rgba(0,0,0,0.2)",
          padding: "0px 10px",
          border: "1px solid green",
          borderRadius: "10px",
          color: "white",
          ...textOutline.black,
        }}
      >
        {`${o.headName} x ${o.multiplier}`}
      </div>
    ));
    return _outcomesChips;
  }, [outcomes]);
  if (isHandInPlay)
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "4px 0px",
          margin: "15px 0px 5px 0px",
          background: "rgba(0,0,0,0.2)",
          gap: 10,
        }}
      >
        {outcomesChips}
      </div>
    );
  return (
    <div id="outcomes">
      <CardHand
        cards={
          modCards.length && lastHandScore === 0
            ? [...lastHand, ...modCards, ...outcomes, ...lastOutcomes]
            : [...lastHand, ...outcomes, ...lastOutcomes]
        }
        overlap={overlap + 50}
        chaos={5}
      >
        {runScore === 0 ? (
          <div
            style={{
              ...textOutline.blackHalf,
              color: "white",
              marginTop: 10,
              background: `rgb(0,0,0,0.3)`,
              border: "1px solid green",
              borderRadius: "10px",
              padding: "0px 10px",
              textAlign: "center",
            }}
          >
            Play three card. You can discard cards and replace. Certain combos
            like matching colors grant cat multipliers.
          </div>
        ) : (
          <HandResults
            lastHandScore={lastHandScore}
            levelTarget={levelTarget}
            isLevelBeaten={isLevelBeaten}
          />
        )}
      </CardHand>
    </div>
  );
};
