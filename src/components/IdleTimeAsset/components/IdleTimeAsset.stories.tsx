// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { Meta, StoryObj } from "@storybook/react";

import { IdleTimeAsset } from "./IdleTimeAsset";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Idle/IdleTimeAsset",
  component: IdleTimeAsset,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof IdleTimeAsset>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
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
