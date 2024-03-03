import type { Meta, StoryObj } from "@storybook/react";

import { CatDeckDealer } from "./CatDeckDealer";
import { catDeck } from "../../cardDecks/catsDeck";

const meta: Meta<typeof CatDeckDealer> = {
  component: CatDeckDealer,
  title: "CatDeckDealer/CatDeckDealer",
};

export default meta;
type Story = StoryObj<typeof CatDeckDealer>;

export const Dealer: Story = {
  render: () => <CatDeckDealer deck={catDeck} handSize={3} />,
};
