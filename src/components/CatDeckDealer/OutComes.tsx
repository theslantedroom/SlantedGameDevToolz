import React, { useMemo } from "react";
import { CardHand } from "../CardHand/CardHand";
import { CatCard, OutcomesCard } from "../../cardDecks/catsDeck";
import { HandResults } from "./HandResults";
import { textOutline } from "../GameCard/GameCardSx";
export interface Props {
  outcomes: OutcomesCard[];
  lastOutcomes: OutcomesCard[];
  lastHand: CatCard[];
  isHandInPlay: boolean;
  isLevelBeaten: boolean;
  lastHandScore: number;
  overlap: number;
  levelScore: number;
  levelTarget: number;
}
export const OutComes: React.FC<Props> = ({
  outcomes,
  lastOutcomes,
  isHandInPlay,
  lastHandScore,
  lastHand,
  overlap,
  levelScore,
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
        {_outcomesChips}
      </div>
    );
  }, [outcomes]);

  if (isHandInPlay) return outcomesChips;
  return (
    <div id="outcomes">
      {outcomesChips}
      <CardHand
        cards={[...lastHand, ...lastOutcomes]}
        overlap={overlap}
        chaos={2}
      >
        {levelScore === 0 ? (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                ...textOutline.blackHalf,
                color: "white",
                background: `rgb(0,0,0,0.3)`,
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              Reach the target
              <span
                style={{
                  ...textOutline.blackHalf,
                  color: "red",
                }}
              >{` 100 cats `}</span>
              in
              <span
                style={{
                  ...textOutline.blackHalf,
                  color: "aqua",
                }}
              >{` 3 turns `}</span>
            </div>
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
