import type React from "react";
export interface Props {
	count: number;
}
export const Example: React.FC<Props> = ({ count }) => {
	return <div>Example:{count}</div>;
};
