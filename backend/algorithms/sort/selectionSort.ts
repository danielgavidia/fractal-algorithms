type Node = {
	list: number[];
	index?: number;
	indexLowest?: number;
	iteration?: number;
	success?: boolean;
	childNode?: Node;
};

export const selectionSort = (node: Node): Node => {
	const { list, index, indexLowest, iteration, success } = node;

	// Defaults
	const indexDefined = index === undefined ? 0 : index;
	const indexLowestDefined = indexLowest === undefined ? indexDefined : indexLowest;
	const iterationDefined = iteration === undefined ? 0 : iteration;
	const successDefined = success === undefined ? false : success;

	// Base case: if iteration reaches the end of the list, the sorting is complete
	if (iterationDefined === list.length - 1) {
		return { ...node, success: true };
	}

	// If index reaches the end of the list, swap the lowest found element with the current iteration index
	if (indexDefined === list.length) {
		const newList: number[] = [...list];
		// Perform swap
		const temp = newList[iterationDefined];
		newList[iterationDefined] = newList[indexLowestDefined];
		newList[indexLowestDefined] = temp;

		return selectionSort({
			list: newList,
			index: iterationDefined + 1,
			indexLowest: iterationDefined + 1,
			iteration: iterationDefined + 1,
			success: successDefined,
		});
	}

	// Recursive call: find the lowest element in the unsorted portion
	let childNode: Node;

	// If list[index] < lowest item, update indexLowest
	if (list[indexDefined] < list[indexLowestDefined]) {
		childNode = selectionSort({
			list: list,
			index: indexDefined + 1,
			indexLowest: indexDefined,
			iteration: iterationDefined,
			success: successDefined,
		});
	}
	// If list[index] > lowest item, continue without updating indexLowest
	else {
		childNode = selectionSort({
			list: list,
			index: indexDefined + 1,
			indexLowest: indexLowestDefined,
			iteration: iterationDefined,
			success: successDefined,
		});
	}

	return { ...node, childNode };
};
