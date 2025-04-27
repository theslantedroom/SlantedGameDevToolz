export const rollDice = (diceSides: number): number => {
	if (!Number.isInteger(diceSides) || diceSides <= 0) {
		console.error(
			"Invalid input: Please provide a positive integer for dice sides",
		);
		return 1;
	}
	const thisRollValue = Math.floor(Math.random() * diceSides + 1);
	return thisRollValue;
};

export const rollLowWeightedDice = (diceSides: number) => {
	if (!Number.isInteger(diceSides) || diceSides <= 0) {
		console.error(
			"Invalid input: Please provide a positive integer for dice sides",
		);
		return 1;
	}
	const thisRollValue = Math.floor(Math.random() * diceSides + 1);
	const isHighRoll = thisRollValue >= diceSides / 2;
	if (isHighRoll && percentageChance(50)) return Math.floor(thisRollValue / 2);
	return thisRollValue;
};

export const rollHighWeightedDice = (diceSides: number) => {
	if (!Number.isInteger(diceSides) || diceSides <= 0) {
		console.error(
			"Invalid input: Please provide a positive integer for dice sides",
		);
		return 1;
	}
	const thisRollValue = Math.floor(Math.random() * diceSides + 1);

	const isLowRoll = thisRollValue <= diceSides / 2;
	if (isLowRoll && percentageChance(50)) return Math.round(thisRollValue * 2);
	return thisRollValue;
};

export function percentageChance(chance: number): boolean {
	if (!Number.isInteger(chance)) {
		console.error("Invalid input");
		return false;
	}
	if (chance < 0) {
		return false;
	}
	if (chance > 100) {
		return true;
	}
	const randomValue = Math.random() * 100;
	return randomValue < chance;
}
