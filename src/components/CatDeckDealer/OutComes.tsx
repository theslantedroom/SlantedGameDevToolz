import React from "react";
import { CardHand } from "../CardHand/CardHand";
import { DeckModCard, OutcomesCard } from "../../cardDecks/catsDeck";
import { HandResults } from "./HandResults";
export interface Props {
  outcomes: OutcomesCard[];
  modCards: DeckModCard[];
  isHandInPlay: boolean;
  handResults: number;
}
export const OutComes: React.FC<Props> = ({
  outcomes,
  modCards,
  isHandInPlay,
  handResults,
}) => {
  return (
    <div id="outcomes">
      {outcomes.length ? (
        <div style={{ textAlign: "center" }}>Bonuses</div>
      ) : null}
      <CardHand
        cards={
          modCards.length && handResults === 0
            ? [...modCards, ...outcomes]
            : outcomes
        }
        overlap={0}
        chaos={0}
      >
        <HandResults handResults={handResults} isHandInPlay={isHandInPlay} />
      </CardHand>
    </div>
  );
};
const [isTrue, sTrue] = useState();
