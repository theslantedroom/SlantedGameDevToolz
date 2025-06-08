// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { Meta, StoryObj } from "@storybook/react-vite";

import { MobileGamePadOverLay } from "./MobileGamePadOverLay";

const meta = {
  title: "Example/MobileGamePadOverLay",
  component: MobileGamePadOverLay,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MobileGamePadOverLay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
