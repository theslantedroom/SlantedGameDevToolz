import { useCallback, useEffect, useMemo, useState } from "react";
import {
  CatCard,
  DeckModCard,
  OutcomesCard,
  catDeckOutcomes,
  getModdedDeck,
} from "../../../cardDecks/catsDeck";

export const useCatDeckHandScore = ({
  hand,
  lastHand,
  modCards,
  lastOutcomes,
}: {
  hand: CatCard[];
  lastHand: CatCard[];
  modCards: DeckModCard[];
  lastOutcomes: OutcomesCard[];
}) => {
  const [outcomes, setOutcomes] = useState<OutcomesCard[]>([]);
  const addOutcome = useCallback(
    (headName: string) => {
      if (hand.length !== 3) {
        return;
      }
      setOutcomes((p) => {
        const moddedOutcomes = getModdedDeck({
          deck: catDeckOutcomes,
          modCards: modCards,
        });
        const outcome = moddedOutcomes.find((c) => c.headName === headName);
        if (outcome !== undefined) {
          return [...p, outcome];
        } else {
          return p;
        }
      });
    },
    [hand.length, modCards]
  );

  const baseScore = useMemo(() => {
    const _hand = hand.length ? hand : lastHand;
    console.log("lastHand", lastHand);
    console.log("hand", hand);
    const catCardsWithValue = _hand.filter(
      (card) => card.value !== undefined && card.type.includes("Cat")
    );
    let handScore = 0;
    catCardsWithValue.forEach((card) => {
      handScore += card.value || 0;
    });
    return handScore;
  }, [hand, lastHand]);

  const multiplier = useMemo(() => {
    const _outcomes = outcomes.length ? outcomes : lastOutcomes;

    let handScore = 0;
    _outcomes.forEach((card) => {
      handScore += card.multiplier || 0;
    });
    return handScore;
  }, [lastOutcomes, outcomes]);

  const clearOutcomes = useCallback(() => {
    setOutcomes([]);
  }, [setOutcomes]);

  useEffect(() => {
    clearOutcomes();
    const catCards = hand.filter((card) => {
      return card.type.includes("Cat");
    });
    const isAllCatsSameType = catCards.every((card) => {
      return card.type === catCards[0].type;
    });
    const hasTwoCatCards = catCards.length >= 2;

    const hasThreeMultiplierCatCards =
      hand.filter((card) => card.type.includes("Multiplier")).length === 3;
    const hasTwoMultiplierCatCards =
      hand.filter((card) => card.type.includes("Multiplier")).length === 2;
    const hasOneMultiplierCatCards =
      hand.filter((card) => card.type.includes("Multiplier")).length === 1;

    const isAllCardsSameType = hand.every((card) => {
      return card.type === hand[0].type;
    });
    const uniqueTypesSet = new Set(hand.map((card) => card.type));
    const isAllUniqueType = uniqueTypesSet.size === hand.length;
    const isAllCardsCatCards = hand.every((card) => {
      return card.type.includes("Cat");
    });

    const hasMultiplierCard = hand.some((card) => {
      return card.type === "Multiplier";
    });

    const isAllCardsSameValue = hand.every((card) => {
      return card.value === hand[0].value;
    });

    const isPureBredMating = hasOneMultiplierCatCards && isAllCatsSameType;
    const isCuddlePuddle = hasTwoMultiplierCatCards;
    if (hasMultiplierCard && hasTwoCatCards) {
      addOutcome("Mating");
    }
    // Return a handScore based on the conditions
    if (isAllCardsSameType && isAllCardsCatCards) {
      addOutcome("Matching Colors");
    }
    if (isAllUniqueType && isAllCardsCatCards) {
      addOutcome("Mixed Colors");
    }
    if (hasThreeMultiplierCatCards) {
      addOutcome("No Cats");
    }
    if (!isAllUniqueType && !hasMultiplierCard) {
      addOutcome("Group of Cats");
    }

    if (isAllCardsSameValue) {
      addOutcome("Equal Teams");
    }
    if (isPureBredMating) {
      addOutcome("Pure Bred");
    }
    if (isCuddlePuddle) {
      addOutcome("Cuddle Puddle");
    }
  }, [addOutcome, clearOutcomes, hand]);
  return {
    multiplier,
    baseScore,
    handScore: baseScore * multiplier,
    outcomes,
    clearOutcomes,
  };
};
