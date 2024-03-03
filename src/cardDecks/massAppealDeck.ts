type CardTypes = string;
export type CardTarget = "Body" | "Head";

export type BalanceSlider = {
  leftStat: string;
  rightStat: string;
  value: number;
};

export type MassAppealCard = {
  headName: string;
  value?: number;
  multiplier?: number;
  infoSection?: string;
  code?: string;
  color?: string;
  emoji: string;
  type: CardTypes;
  target?: CardTarget;
  tier?: "s" | "a" | "b" | "c" | "d" | "f";
  slider?: BalanceSlider;
};

export const startingCards: MassAppealCard[] = [
  {
    headName: "Cat",
    infoSection: "The cat is cuddly",
    code: "cat",
    type: "Animal",
    emoji: "🐈",
    slider: { leftStat: "Cute", rightStat: "Manly", value: 39 },
  },
  {
    headName: "Mass Appeal",
    infoSection: "Marketable to a broad audience.",
    code: "MassAppeal",
    type: "Profit Potential",
    emoji: "🌟🎤",
  },
  {
    headName: "The One Ring",
    infoSection:
      "An evil ring. An evil ring. An evil ring. An evil ring. An evil ring. An evil ring. An evil ring.",
    code: "TheOneRing",
    type: "Profit Potential",
    emoji: "🪙💍",
  },
  {
    headName: "Lorem Ipsum",
    infoSection: `
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virgini.`,
    code: "LoremIpsum",
    type: "Profit Potential",
    emoji: "🤔🌟",
  },
];

export const boxingPunchCards: MassAppealCard[] = [
  {
    headName: "Jab",
    infoSection: "A smashing blow.",
    code: "MassAppeal",
    type: "Punch",
    target: "Body",
    emoji: "👊",
    tier: "s",
  },
  {
    headName: "Straight",
    infoSection: "A smashing blow.",
    code: "MassAppeal",
    type: "Punch",
    target: "Body",
    emoji: "👊",
    tier: "a",
  },
  {
    headName: "Hook",
    infoSection: "A smashing blow.",
    code: "MassAppeal",
    type: "Punch",
    target: "Body",
    emoji: "🤜 ",
    tier: "b",
  },
  {
    headName: "Uppercut",
    infoSection: "A smashing blow.",
    code: "MassAppeal",
    type: "Punch",
    target: "Body",
    emoji: "✊",
    tier: "c",
  },
  {
    headName: "Uppercut",
    infoSection: "A smashing blow.",
    code: "MassAppeal",
    type: "Punch",
    target: "Body",
    emoji: "✊",
    tier: "d",
  },
  {
    headName: "Uppercut",
    infoSection: "A smashing blow.",
    code: "MassAppeal",
    type: "Punch",
    target: "Head",
    emoji: "✊",
  },
  {
    headName: "Uppercut",
    infoSection: "A smashing blow.",
    code: "MassAppeal",
    type: "Punch",
    target: "Body",
    emoji: "✊",
    tier: "f",
  },
];
export const massAppealDeck: MassAppealCard[] = [...startingCards];
