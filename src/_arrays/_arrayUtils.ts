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

/**
 * Removes objects from the first array if their `name` property matches any object's `name` in the second array.
 *
 * @param arr1 - The source array of objects to filter.
 * @param arr2 - The array of objects whose `name` properties should be excluded from `arr1`.
 * @returns A new array containing only the objects from `arr1` whose `name` is not present in `arr2`.
 */
export function removeObjectsWithSameName(
	arr1: { name: string }[],
	arr2: { name: string }[],
): { name: string }[] {
	// Create a Set of names from the second array for efficient lookup
	const namesSet = new Set(arr2.map((obj) => obj.name));

	// Filter the first array to remove objects with names in the second array
	const filteredArray = arr1.filter((obj) => !namesSet.has(obj.name));

	return filteredArray;
}
