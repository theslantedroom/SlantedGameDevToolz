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

const _catDeck: MassAppealCard[] = [
  {
    headName: catHeadnames.cat1,
    value: 1,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.orange,
    emoji: "🐈",
    color: "orange",
  },
  {
    headName: catHeadnames.cat2,
    value: 2,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.orange,
    emoji: "🐈",
    color: "orange",
  },
  {
    headName: catHeadnames.cat3,
    value: 3,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.orange,
    emoji: "🐈",
    color: "orange",
  },
  {
    headName: catHeadnames.cat4,
    value: 4,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.orange,
    emoji: "🐈",
    color: "orange",
  },
  {
    headName: catHeadnames.cat5,
    value: 5,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.orange,
    emoji: "🐈",
    color: "orange",
  },
  {
    headName: catHeadnames.cat6,
    value: 6,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.orange,
    emoji: "🐈",
    color: "orange",
  },
  ///
  {
    headName: catHeadnames.cat1,
    value: 1,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.grey,
    emoji: "😼",
    color: "grey",
  },
  {
    headName: catHeadnames.cat2,
    value: 2,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.grey,
    emoji: "😼",
    color: "grey",
  },
  {
    headName: catHeadnames.cat3,
    value: 3,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.grey,
    emoji: "😼",
    color: "grey",
  },
  {
    headName: catHeadnames.cat4,
    value: 4,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.grey,
    emoji: "😼",
    color: "grey",
  },
  {
    headName: catHeadnames.cat5,
    value: 5,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.grey,
    emoji: "😼",
    color: "grey",
  },
  {
    headName: catHeadnames.cat6,
    value: 6,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.grey,
    emoji: "😼",
    color: "grey",
  },
  ///
  {
    headName: catHeadnames.cat1,
    value: 1,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.black,
    emoji: "🐈‍⬛",
    color: "Black",
  },
  {
    headName: catHeadnames.cat2,
    value: 2,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.black,
    emoji: "🐈‍⬛",
    color: "Black",
  },
  {
    headName: catHeadnames.cat3,
    value: 3,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.black,
    emoji: "🐈‍⬛",
    color: "Black",
  },
  {
    headName: catHeadnames.cat4,
    value: 4,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.black,
    emoji: "🐈‍⬛",
    color: "Black",
  },
  {
    headName: catHeadnames.cat5,
    value: 5,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.black,
    emoji: "🐈‍⬛",
    color: "Black",
  },
  {
    headName: catHeadnames.cat6,
    value: 6,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.black,
    emoji: "🐈‍⬛",
    color: "Black",
  },
  ///
  {
    headName: catHeadnames.cat1,
    value: 1,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.white,
    emoji: "🐱",
    color: "White",
  },
  {
    headName: catHeadnames.cat2,
    value: 2,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.white,
    emoji: "🐱",
    color: "White",
  },
  {
    headName: catHeadnames.cat3,
    value: 3,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.white,
    emoji: "🐱",
    color: "White",
  },
  {
    headName: catHeadnames.cat4,
    value: 4,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.white,
    emoji: "🐱",
    color: "White",
  },
  {
    headName: catHeadnames.cat5,
    value: 5,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.white,
    emoji: "🐱",
    color: "White",
  },
  {
    headName: catHeadnames.cat6,
    value: 6,
    infoSection: randomArrayItem(cardCardTexts),
    type: catTypes.white,
    emoji: "🐱",
    color: "White",
  },
  // multi

  {
    headName: "Mating",
    infoSection: "Meow",
    type: "Multiplier",
    emoji: "💗",
    color: "gold",
  },
  {
    headName: "Mating",
    infoSection: "Meow",
    type: "Multiplier",
    emoji: "💗",
    color: "gold",
  },
  {
    headName: "Mating",
    infoSection: "Meow",
    type: "Multiplier",
    emoji: "💗",
    color: "gold",
  },
];

// const force = [
//   {
//     headName: catHeadnames.cat2,
//     value: 2,
//     infoSection: randomArrayItem(cardCardTexts),
//     type: catTypes.orange,
//     emoji: "🐈",
//     color: "orange",
//   },
//   {
//     headName: catHeadnames.cat2,
//     value: 2,
//     infoSection: randomArrayItem(cardCardTexts),
//     type: catTypes.orange,
//     emoji: "🐈",
//     color: "orange",
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

export const catDeckOutcomes: MassAppealCard[] = [
  // outcomes
  {
    headName: "Mixed Colors",
    multiplier: 4,
    type: "Outcome",
    emoji: "🎨",
    color: "bisque",
  },
  {
    headName: "Matching Colors",
    multiplier: 12,
    type: "Outcome",
    emoji: "🟫",
    color: "bisque",
  },
  {
    headName: "Mating",
    multiplier: 8,
    type: "Outcome",
    emoji: "😻",
    color: "bisque",
  },
  {
    headName: "Cat Pack",
    multiplier: 2,
    type: "Outcome",
    emoji: "🙀",
    color: "bisque",
  },
  {
    headName: "No Cats",
    multiplier: 0,
    type: "Outcome",
    emoji: "🏞️",
    color: "bisque",
  },
  {
    headName: "Equal Teams",
    multiplier: 12,
    type: "Outcome",
    emoji: "⚖️",
    color: "bisque",
  },
  {
    headName: "Pure Bred",
    multiplier: 15,
    type: "Outcome",
    emoji: "🐾",
    color: "bisque",
  },
  {
    headName: "Cuddle Puddle",
    multiplier: 20,
    type: "Outcome",
    emoji: "😽",
    color: "bisque",
  },
];
// 🐅🐯
