/**
 * Returns a random item from the provided array.
 *
 * @param {any[]} array - The array to pick a random item from.
 * @returns {any} A random element from the array.
 *
 * @example
 * const fruits = ['apple', 'banana', 'cherry'];
 * const randomFruit = randomArrayItem(fruits);
 * console.log(randomFruit); // e.g., 'banana'
 */
export const randomArrayItem = (array: any[]) => {
	const index = Math.floor(Math.random() * array.length);
	return array[index];
};
