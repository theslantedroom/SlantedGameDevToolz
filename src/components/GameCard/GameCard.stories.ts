import type { Meta, StoryObj } from "@storybook/react";

import { GameCard } from "./GameCard";
import { massAppealDeck } from "../../cardDecks/massAppealDeck";

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
    card: massAppealDeck[0],
  },
};
