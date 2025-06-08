import type { Meta, StoryObj } from "@storybook/react-vite";

import { Example } from "./Example";

const meta: Meta<typeof Example> = {
	component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
	render: () => <Example count={2} />,
};
