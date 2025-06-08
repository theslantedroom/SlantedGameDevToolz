/**
 * Rolls a fair die with a specified number of sides.
 *
 * @param {number} diceSides - The number of sides on the die. Must be a positive integer.
 * @returns {number} A random number between 1 and diceSides (inclusive).
 */
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

/**
 * Rolls a die with a bias toward lower numbers.
 * High rolls (above or equal to half of diceSides) have a 50% chance of being halved.
 *
 * @param {number} diceSides - The number of sides on the die. Must be a positive integer.
 * @returns {number} A number between 1 and diceSides, more likely to be lower.
 */
export const rollLowWeightedDice = (diceSides: number): number => {
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

/**
 * Rolls a die with a bias toward higher numbers.
 * Low rolls (less than or equal to half of diceSides) have a 50% chance of being doubled.
 *
 * @param {number} diceSides - The number of sides on the die. Must be a positive integer.
 * @returns {number} A number between 1 and diceSides, more likely to be higher.
 */
export const rollHighWeightedDice = (diceSides: number): number => {
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

/**
 * Returns true based on a given percentage chance.
 *
 * @param {number} chance - An integer representing the percent chance (0–100).
 * @returns {boolean} True if the random roll is below the chance threshold.
 *
 * @example
 * percentageChance(25); // roughly 1 in 4 chance to return true
 */
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

/**
 * Rolls a dice with a specified number of sides and checks if the result is the maximum possible value.
 *
 * @param diceSides - The number of sides on the die (e.g. 6 for a standard die).
 * @returns `true` if the roll landed on the maximum value, otherwise `false`.
 */
export const rollDiceIsMaxRoll = (diceSides: number): boolean => {
	const thisRollValue = Math.floor(Math.random() * diceSides + 1);
	return thisRollValue === diceSides;
};
