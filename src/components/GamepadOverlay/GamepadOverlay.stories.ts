import type { Meta, StoryObj } from "@storybook/react";

import { GamepadOverlay } from "./GamepadOverlay";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/GamepadOverlay",
  component: GamepadOverlay,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof GamepadOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    count: 11,
  },
};

export const Secondary: Story = {
  args: {
    count: 50,
  },
};
