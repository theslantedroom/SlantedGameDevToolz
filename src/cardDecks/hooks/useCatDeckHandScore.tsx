import { useCallback, useEffect, useMemo, useState } from "react";
import { MassAppealCard } from "../massAppealDeck";
import { catDeckOutcomes } from "../catsDeck";

export const useCatDeckHandScore = (hand: MassAppealCard[]) => {
  const [outcomes, setOutcomes] = useState<MassAppealCard[]>([]);
  // const [multiplier, setMultiplier] = useState(0);
  // const [baseScore, setBaseScore] = useState(0);
  const addOutcome = useCallback((headName: string) => {
    setOutcomes((p) => {
      const outcome = catDeckOutcomes.find((c) => c.headName === headName);

      if (outcome !== undefined) {
        return [...p, outcome];
      } else {
        return p;
      }
    });
  }, []);

  const baseScore = useMemo(() => {
    const catCardsWithValue = hand.filter(
      (card) => card.value !== undefined && card.type.includes("Cat")
    );
    let score = 0;
    catCardsWithValue.forEach((card) => {
      score += card.value || 0;
    });
    return score;
  }, [hand]);

  const multiplier = useMemo(() => {
    let score = 0;
    outcomes.forEach((card) => {
      score += card.multiplier || 0;
    });
    return score;
  }, [outcomes]);

  const clearOutcomes = useCallback(() => {
    setOutcomes([]);
  }, [setOutcomes]);
  useEffect(() => {
    const hasTwoCatCards =
      hand.filter((card) => card.type.includes("Cat")).length >= 2;

    const hasThreeMultiplierCatCards =
      hand.filter((card) => card.type.includes("Multiplier")).length >= 3;

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

    if (hasMultiplierCard && hasTwoCatCards) {
      addOutcome("Mating");
    }
    // Return a score based on the conditions
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
      addOutcome("Cat Pack");
    }
    if (hand.length === 0) {
      clearOutcomes();
    }
  }, [addOutcome, clearOutcomes, hand]);

  return {
    multiplier,
    baseScore,
    score: baseScore * multiplier,
    outcomes,
    clearOutcomes,
  };
};
