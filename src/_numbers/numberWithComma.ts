/**
 * Returns a short suffix for large numbers based on their magnitude.
 *
 * @param _num - The input number to determine the suffix for.
 * @returns A short string suffix like "(M)", "(B)", "(T)", etc., depending on the value.
 */
function getNumberShortSuffix(_num: number): string {
	const num = Math.abs(_num);
	if (num >= 1e21) {
		return ""; // Quintillion
	}
	if (num >= 1e18) {
		return "(Qi)"; // Quadrillion
	}
	if (num >= 1e15) {
		return "(Qa)"; // Quadrillion
	}
	if (num >= 1e12) {
		return "(T)"; // Trillion
	}
	if (num >= 1e9) {
		return "(B)"; // Billion
	}
	if (num >= 1e6) {
		return "(M)"; // Million
	}
	if (num >= 1e3) {
		return "";
	}
	return "";
}

/**
 * Formats a number with comma separators and optional suffixes for large values.
 *
 * @param inputMoney - The number to format.
 * @param showNegatives - Whether to show a "-" sign for negative numbers (default: false).
 * @param showSuffix - Whether to append a magnitude suffix like "(M)", "(B)", etc. (default: true).
 * @returns The formatted number as a string, e.g., "1,234(M)".
 */
export function numberWithCommas(
	inputMoney: number,
	showNegatives = false,
	showSuffix = true,
) {
	const absValue = Math.abs(inputMoney);
	const sign = inputMoney < 0 && showNegatives ? "-" : "";

	const short = getNumberShortSuffix(inputMoney);
	const res = sign + absValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	if (showSuffix) return `${res}${short}`;
	return res;
}
