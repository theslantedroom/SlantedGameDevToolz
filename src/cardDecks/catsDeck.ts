import { randomArrayItem } from "../util/randomArrayItem";
import { cardCardTexts } from "./catCardTexts";

type CatDeckCardTypes =
  | "Orange Cat"
  | "Grey Cat"
  | "Black Cat"
  | "White Cat"
  | "Mating"
  | "Multiplier"
  | "Outcome"
  | "Meowdifier";

export type CatCard = {
  headName: string;
  value: number;
  multiplier?: number;
  infoSection?: string;
  code?: string;
  color?: string;
  target?: string;
  emoji: string;
  type: CatDeckCardTypes;
};

const generateCatCards = ({
  color,
  count,
}: {
  color: "black" | "orange" | "grey" | "white";
  count: number;
}) => {
  const catHeadnames = [
    "1 Cat",
    "2 Cats",
    "3 Cats",
    "4 Cats",
    "5 Cats",
    "6 Cats",
  ];
  const catTypes = {
    orange: "Orange Cat",
    grey: "Grey Cat",
    black: "Black Cat",
    white: "White Cat",
  } as {
    orange: CatDeckCardTypes;
    grey: CatDeckCardTypes;
    black: CatDeckCardTypes;
    white: CatDeckCardTypes;
  };
  const catEmoji = {
    orange: "🐱",
    grey: "😼",
    black: "😽",
    white: "😸",
  };
  const cards: CatCard[] = [];
  for (let i = 0; i < count; i++) {
    const cardValue = i + 1;
    const card: CatCard = {
      headName: catHeadnames[i],
      value: cardValue,
      infoSection: randomArrayItem(cardCardTexts),
      type: catTypes[color],
      emoji: catEmoji[color],
      color: color,
    };
    cards.push(card);
  }
  return cards;
};

const generateMatingCards = ({ count }: { count: number }) => {
  const cards: CatCard[] = [];
  for (let i = 0; i < count; i++) {
    const card: CatCard = {
      headName: "Mating",
      infoSection: "Meow",
      type: "Multiplier",
      emoji: "💗",
      color: "gold",
      value: 0,
    };
    cards.push(card);
  }
  return cards;
};

const _catDeck: CatCard[] = [
  ...generateCatCards({ color: "black", count: 6 }),
  ...generateCatCards({ color: "grey", count: 6 }),
  ...generateCatCards({ color: "orange", count: 6 }),
  ...generateCatCards({ color: "white", count: 6 }),
  ...generateMatingCards({ count: 3 }),
];

export const catDeck = [..._catDeck].map((card, i) => {
  return { ...card, code: `${i + 1}${card.headName}` };
});

export type OutcomesCard = {
  headName: string;
  value: number;
  multiplier?: number;
  infoSection?: string;
  code?: string;
  color?: string;
  emoji: string;
  type: CatDeckCardTypes;
  target?: string;
};

export const catDeckOutcomes: OutcomesCard[] = [
  {
    headName: "Mixed Colors",
    multiplier: 4,
    type: "Outcome",
    emoji: "🎨",
    color: "bisque",
    value: 0,
  },
  {
    headName: "Matching Colors",
    multiplier: 12,
    type: "Outcome",
    emoji: "🟫",
    color: "bisque",
    value: 0,
  },
  {
    headName: "Mating",
    multiplier: 8,
    type: "Outcome",
    emoji: "😻",
    color: "bisque",
    value: 0,
  },
  {
    headName: "Group of Cats",
    multiplier: 2,
    type: "Outcome",
    emoji: "🙀",
    color: "bisque",
    value: 0,
  },
  {
    headName: "No Cats",
    multiplier: 0,
    type: "Outcome",
    emoji: "🏞️",
    color: "bisque",
    value: 0,
  },
  {
    headName: "Equal Teams",
    multiplier: 12,
    type: "Outcome",
    emoji: "⚖️",
    color: "bisque",
    value: 0,
  },
  {
    headName: "Pure Bred",
    multiplier: 15,
    type: "Outcome",
    emoji: "🐾",
    color: "bisque",
    value: 0,
  },
  {
    headName: "Cuddle Puddle",
    multiplier: 20,
    type: "Outcome",
    target: "2x Mating",
    emoji: "💗",
    color: "bisque",
    value: 0,
  },
];

export type DeckModCard = {
  headName: string;
  multiplier: number;
  code?: string;
  color?: string;
  emoji: string;
  type: CatDeckCardTypes;
  target: CatDeckCardTypes;
};
export const catDeckMods: DeckModCard[] = [
  {
    headName: "Ninja Cat",
    type: "Meowdifier",
    emoji: "🐱",
    color: "silver",
    target: "Grey Cat",
    multiplier: 4,
  },
  {
    headName: "Lover Cat",
    type: "Meowdifier",
    emoji: "🐅",
    color: "pink",
    target: "Mating",
    multiplier: 2,
  },
];

export const getModdedDeck = ({
  deck,
  modCards,
}: {
  deck: CatCard[] | OutcomesCard[];
  modCards: DeckModCard[];
}) => {
  return [
    ...deck.map((deckCard) => {
      const moddedCardTypes: string[] = modCards.map(
        (modCard) => modCard.target
      );
      if (
        moddedCardTypes.includes(deckCard.type) ||
        moddedCardTypes.includes(deckCard.headName)
      ) {
        const actingModCard = modCards.find((mc) => {
          return mc.target === deckCard.type || mc.target === deckCard.headName;
        });
        if (!actingModCard) return deckCard;
        return {
          ...deckCard,
          value: deckCard.value * actingModCard.multiplier,
          multiplier: deckCard.multiplier
            ? deckCard.multiplier * actingModCard.multiplier
            : undefined,
          target: `${actingModCard.multiplier}x (${actingModCard.headName})`,
        };
      }
      return deckCard;
    }),
  ];
};

export function getRandomMods(cardCount: number) {
  const numRemaining = cardCount;
  if (numRemaining === 0) {
    return [];
  } else if (numRemaining === 1) {
    const randomIndex = Math.floor(Math.random() * catDeckMods.length);
    return [catDeckMods[randomIndex]];
  } else {
    const shuffledArray = catDeckMods.sort(() => Math.random() - 0.5); // Shuffle the array randomly
    return shuffledArray.slice(0, 2);
  }
}
