// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { Meta, StoryObj } from "@storybook/react";

import { Test } from "./Test";

const meta = {
  title: "Example/Test",
  component: Test,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

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
