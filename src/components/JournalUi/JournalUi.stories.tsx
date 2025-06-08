import type { Meta, StoryObj } from "@storybook/react-vite";

import { JournalUi } from "./JournalUi";

const meta: Meta<typeof JournalUi> = {
	component: JournalUi,
};

export default meta;
type Story = StoryObj<typeof JournalUi>;
const pages = {
	titles: ["Character", "Magic", "Items", "Skills"],
	contents: [
		"View and customize your hero.",
		"Cast powerful spells.",
		"Browse and equip items.",
		"Upgrade and assign new skills.",
	],
};

/*
 * Example JournalUi story with React Hooks.
 */
const Usage = () => {
	return (
		<JournalUi
			pageTitles={pages.titles}
			pageContents={pages.contents}
			showFooter={false}
		/>
	);
};

export const Render: Story = {
	render: () => <Usage />,
};

export const Footer: Story = {
	args: {
		pageTitles: pages.titles,
		pageContents: pages.contents,
		showFooter: true,
	},
};
export const FooterText: Story = {
	args: {
		pageTitles: pages.titles,
		pageContents: pages.contents,
		showFooter: true,
		showFooterText: true,
	},
};
