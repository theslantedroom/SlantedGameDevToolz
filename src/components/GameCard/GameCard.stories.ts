import type { Meta, StoryObj } from "@storybook/react";

import { GameCard } from "./GameCard";

const meta = {
  title: "GameCard/GameCard",
  component: GameCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof GameCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    infoSection: "infoSection",
    head: "head",
  },
};
