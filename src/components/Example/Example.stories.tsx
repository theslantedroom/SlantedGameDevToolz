import type { Meta, StoryObj } from "@storybook/react-vite";

import { Example } from "./Example";

const meta = {
	component: Example,
	decorators: [],
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleApp: Story = {
	args: {
		count: 1,
	},
};
