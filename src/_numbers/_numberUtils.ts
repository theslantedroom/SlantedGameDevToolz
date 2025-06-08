/**
 * Checks if a number exceeds JavaScript's `Number.MAX_SAFE_INTEGER` (±9007199254740991).
 *
 * @param number - The number to check.
 * @returns `true` if the absolute value of the number is greater than `Number.MAX_SAFE_INTEGER`, otherwise `false`.
 */
export function isNumberTooLarge(number: number): boolean {
	return Math.abs(number) > Number.MAX_SAFE_INTEGER;
}
