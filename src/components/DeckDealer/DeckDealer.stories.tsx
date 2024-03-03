import type { Meta, StoryObj } from "@storybook/react";

import { DeckDealer } from "./DeckDealer";
import { catDeck } from "../../cardDecks/catsDeck";

const meta: Meta<typeof DeckDealer> = {
  component: DeckDealer,
  title: "DeckDealer/DeckDealer",
};

export default meta;
type Story = StoryObj<typeof DeckDealer>;

export const Dealer: Story = {
  render: () => <DeckDealer deck={catDeck} handSize={3} />,
};
