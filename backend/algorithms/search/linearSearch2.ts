// write my search

interface SearchState {
	index: number;
}

// returns undefined if it failed to find anything
export function search(
	array: number[],
	searchTerm: number,
	callback?: (state: SearchState) => void,
	index: number = 0
) {
	// log the state of every search call here:

	if (index >= array.length) return undefined;

	if (callback) callback({ index: index }); // callbacks are a way to INJECT side effects into pure functions.
	// base case
	if (array[index] === searchTerm) return index;

	return search(array, searchTerm, callback, index + 1);
}

const history: SearchState[] = [];

const result = search([1, 4, 3, 9, 20, 56], 8, (state) => {
	console.log(state);
	// history.push(state);
	// setAnimationState(state);
});
console.log(result);

// console.log("history: ", history);
// console.log("result: ", result);

const result2 = search([1, 4, 3, 9, 20, 56], 8);

console.log(result2);
