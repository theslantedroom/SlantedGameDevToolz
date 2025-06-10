import type { Meta, StoryObj } from "@storybook/react-vite";

import { LocalizationSelect } from "./LocalizationSelect";

const meta = {
	component: LocalizationSelect,
	decorators: [],
	args: { hideTitle: false, size: 70 },
} satisfies Meta<typeof LocalizationSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
