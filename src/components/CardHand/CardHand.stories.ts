// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { Meta, StoryObj } from "@storybook/react";

import { CardHand } from "./CardHand";
import {
  boxingPunchCards,
  startingCards,
} from "../../cardDecks/massAppealDeck";

const meta = {
  title: "CardHand/CardHand",
  component: CardHand,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardHand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cards: boxingPunchCards,
  },
};
export const StarterDeck: Story = {
  args: {
    cards: startingCards,
  },
};
