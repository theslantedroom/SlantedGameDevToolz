// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { Meta, StoryObj } from "@storybook/react";

import { CardHand } from "./CardHand";

const sampleCard = {
  headName: "base",
  shortname: "base",
  code: "base",
  a: "base",
  b: "base",
  c: "base",
};

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
    cards: [
      {
        headName: "base",
        shortname: "base",
        code: "base",
        a: "base",
        b: "base",
        c: "base",
      },
      sampleCard,
      sampleCard,
    ],
  },
};
