import type React from "react";
export interface Props {
	count: number;
}
export const Example: React.FC<Props> = ({ count }) => {
	return <h1>😃:{count}</h1>;
};
