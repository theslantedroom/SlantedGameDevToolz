import type { Meta, StoryObj } from "@storybook/react-vite";

import { ImportExportLocalStorage } from "./ImportExportLocalStorage";

const meta = {
	component: ImportExportLocalStorage,
	decorators: [],
	args: {},
} satisfies Meta<typeof ImportExportLocalStorage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { defaultData: { story: 1 } } };
