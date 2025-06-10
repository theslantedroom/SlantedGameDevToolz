import type { Meta, StoryObj } from "@storybook/react-vite";

import { LocalizationSelect } from "./LocalizationSelect";

const meta = {
	component: LocalizationSelect,
	decorators: [],
	args: { hideTitle: false, size: undefined, fontColor: undefined },
} satisfies Meta<typeof LocalizationSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FontColor: Story = { args: { fontColor: "red", size: 50 } };
export const HideTitle: Story = { args: { hideTitle: true } };
