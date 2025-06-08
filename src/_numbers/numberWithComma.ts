/**
 * Formats a number with commas as thousands separators.
 *
 * @param {number} inputMoney - The number to format.
 * @param {boolean} [showNegatives=false] - Whether to retain the negative sign for negative numbers.
 * @returns {string} The formatted number as a string with commas.
 *
 * @example
 * numberWithCommas(1234567); // "1,234,567"
 * numberWithCommas(-1234567); // "1,234,567"
 * numberWithCommas(-1234567, true); // "-1,234,567"
 */
export function numberWithCommas(inputMoney: number, showNegatives = false) {
	if (inputMoney < 0 && !showNegatives) {
		return (inputMoney * -1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	return inputMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
