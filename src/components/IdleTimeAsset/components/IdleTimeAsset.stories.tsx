import type { Meta, StoryObj } from "@storybook/react-vite";

import { IdleTimeAsset } from "./IdleTimeAsset";

const meta = {
	title: "Games/IdleTimeAsset",
	component: IdleTimeAsset,
} satisfies Meta<typeof IdleTimeAsset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		counterName: "CardA",
		dateCreated: new Date(),
		timeRate: 1,
		counterSpeedMs: 100,
		minTimeRate: -100000,
		maxTimeRate: 100000,
	},
};
