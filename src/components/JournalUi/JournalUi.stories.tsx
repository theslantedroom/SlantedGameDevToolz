import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { JournalUi } from "./JournalUi";

const meta: Meta<typeof JournalUi> = {
	component: JournalUi,
};

export default meta;
type Story = StoryObj<typeof JournalUi>;

/*
 * Example JournalUi story with React Hooks.
 * See note below related to this example.
 */
const Usage = () => {
	// Sets the hooks for both the label and primary props
	const [value, setValue] = useState("Secondary");
	const [isPrimary, setIsPrimary] = useState(false);

	// Sets a click handler to change the label's value
	const handleOnChange = () => {
		if (!isPrimary) {
			setIsPrimary(true);
			setValue("Primary");
		}
	};
	return <JournalUi />;
};

export const Primary: Story = {
	render: () => <Usage />,
};
