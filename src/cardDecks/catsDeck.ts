import { randomArrayItem } from "../util/randomArrayItem";
import { cardCardTexts } from "./catCardTexts";
import { MassAppealCard } from "./massAppealDeck";
const catHeadnames = {
  cat1: "1 Cat",
  cat2: "2 Cats",
  cat3: "3 Cats",
  cat4: "4 Cats",
  cat5: "5 Cats",
  cat6: "6 Cats",
};
const catTypes = {
  orange: "Orange Cat",
  grey: "Grey Cat",
  black: "Black Cat",
  white: "White Cat",
};

const catEmoji = {
  orange: "🐱",
  grey: "😼",
  black: "😽",
  white: "😸",
};
const catColor = {
  orange: "orange",
  grey: "grey",
  black: "black",
  white: "white",
};

export type CatCard = {
  headName: string;
  value: number;
  multiplier?: number;
  infoSection?: string;
  code?: string;
  color?: string;
  target?: string;
  emoji: string;
  type: string;
};

const _catDeck: CatCard[] = [
  {
    headName: catHeadnames.cat1,
    value: 1,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.orange,
    emoji: catEmoji.orange,
    color: catColor.orange,
  },
  {
    headName: catHeadnames.cat2,
    value: 2,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.orange,
    emoji: catEmoji.orange,
    color: catColor.orange,
  },
  {
    headName: catHeadnames.cat3,
    value: 3,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.orange,
    emoji: catEmoji.orange,
    color: catColor.orange,
  },
  {
    headName: catHeadnames.cat4,
    value: 4,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.orange,
    emoji: catEmoji.orange,
    color: catColor.orange,
  },
  {
    headName: catHeadnames.cat5,
    value: 5,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.orange,
    emoji: catEmoji.orange,
    color: catColor.orange,
  },
  {
    headName: catHeadnames.cat6,
    value: 6,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.orange,
    emoji: catEmoji.orange,
    color: catColor.orange,
  },
  ///
  {
    headName: catHeadnames.cat1,
    value: 1,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.grey,
    emoji: catEmoji.grey,
    color: catColor.grey,
  },
  {
    headName: catHeadnames.cat2,
    value: 2,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.grey,
    emoji: catEmoji.grey,
    color: catColor.grey,
  },
  {
    headName: catHeadnames.cat3,
    value: 3,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.grey,
    emoji: catEmoji.grey,
    color: catColor.grey,
  },
  {
    headName: catHeadnames.cat4,
    value: 4,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.grey,
    emoji: catEmoji.grey,
    color: catColor.grey,
  },
  {
    headName: catHeadnames.cat5,
    value: 5,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.grey,
    emoji: catEmoji.grey,
    color: catColor.grey,
  },
  {
    headName: catHeadnames.cat6,
    value: 6,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.grey,
    emoji: catEmoji.grey,
    color: catColor.grey,
  },
  ///
  {
    headName: catHeadnames.cat1,
    value: 1,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.black,
    emoji: catEmoji.black,
    color: catColor.black,
  },
  {
    headName: catHeadnames.cat2,
    value: 2,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.black,
    emoji: catEmoji.black,
    color: catColor.black,
  },
  {
    headName: catHeadnames.cat3,
    value: 3,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.black,
    emoji: catEmoji.black,
    color: catColor.black,
  },
  {
    headName: catHeadnames.cat4,
    value: 4,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.black,
    emoji: catEmoji.black,
    color: catColor.black,
  },
  {
    headName: catHeadnames.cat5,
    value: 5,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.black,
    emoji: catEmoji.black,
    color: catColor.black,
  },
  {
    headName: catHeadnames.cat6,
    value: 6,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.black,
    emoji: catEmoji.black,
    color: catColor.black,
  },
  ///
  {
    headName: catHeadnames.cat1,
    value: 1,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.white,
    emoji: catEmoji.white,
    color: catColor.white,
  },
  {
    headName: catHeadnames.cat2,
    value: 2,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.white,
    emoji: catEmoji.white,
    color: catColor.white,
  },
  {
    headName: catHeadnames.cat3,
    value: 3,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.white,
    emoji: catEmoji.white,
    color: catColor.white,
  },
  {
    headName: catHeadnames.cat4,
    value: 4,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.white,
    emoji: catEmoji.white,
    color: catColor.white,
  },
  {
    headName: catHeadnames.cat5,
    value: 5,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.white,
    emoji: catEmoji.white,
    color: catColor.white,
  },
  {
    headName: catHeadnames.cat6,
    value: 6,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.white,
    emoji: catEmoji.white,
    color: catColor.white,
  },
  // multi

  {
    headName: "Mating",
    infoSection: "Meow",
    type: "Multiplier",
    emoji: "💗",
    color: "gold",
    value: 0,
  },
  {
    headName: "Mating",
    infoSection: "Meow",
    type: "Multiplier",
    emoji: "💗",
    color: "gold",
    value: 0,
  },
  {
    headName: "Mating",
    infoSection: "Meow",
    type: "Multiplier",
    emoji: "💗",
    color: "gold",
    value: 0,
  },
];

// const force = [
//   {
//     headName: catHeadnames.cat2,
//     value: 2,
//     infoSection: randomArrayItem(cardCardTexts),
//     type: catTypes.orange,
//     emoji: catEmoji.orange,
//      color: catColor.orange,
//   },
//   {
//     headName: catHeadnames.cat2,
//     value: 2,
//     infoSection: randomArrayItem(cardCardTexts),
//     type: catTypes.orange,
//     emoji: catEmoji.orange,
//      color: catColor.orange,
//   },
//   {
//     headName: "Frisky",
//     infoSection: "Meow",
//     type: "Multiplier",
//     emoji: "💗",
//     color: "gold",
//   },
// ];

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
  type: "Outcome";
  target?: string;
};

export const catDeckOutcomes: OutcomesCard[] = [
  // outcomes
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
    headName: "Cat Pack",
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
// 🐅🐯
export type DeckModCard = {
  headName: string;
  multiplier: number;
  code?: string;
  color?: string;
  emoji: string;
  type: "Meowdifier";
  target: string;
};
export const catDeckMods: DeckModCard[] = [
  {
    headName: "Ninja Cat",
    type: "Meowdifier",
    emoji: "🐱‍👤",
    color: "silver",
    target: catTypes.grey,
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
      const moddedCardTypes = modCards.map((modCard) => modCard.target);
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
