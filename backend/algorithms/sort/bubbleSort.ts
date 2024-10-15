type Node = {
	list: number[];
	index?: number;
	swapCount?: number;
	iteration?: number;
	success?: boolean;
	childNode?: Node;
};

export const bubbleSort = (node: Node) => {
	const { list, index, swapCount, iteration, success } = node;

	// Defaults
	const indexDefined = index === undefined ? 0 : index;
	const swapCountDefined = swapCount === undefined ? 0 : swapCount;
	const iterationDefined = iteration === undefined ? 0 : iteration;
	const successDefined = success === undefined ? false : success;

	// If end of list iteration with zero swaps, return success
	if (indexDefined === list.length - 1 && swapCountDefined === 0) {
		return { ...node, success: true };
	}

	// Start childnode
	let childNode = {};

	// If end of list iteration but swaps > 0, restart and mark failure
	if (indexDefined === list.length - 1 && swapCountDefined > 0) {
		childNode = bubbleSort({
			list: [...list],
			index: 0,
			swapCount: 0,
			iteration: iterationDefined + 1,
			success: successDefined,
		});
	}

	// Perform the swap if necessary
	const index1 = indexDefined;
	const index2 = indexDefined + 1;
	const item1 = list[index1];
	const item2 = list[index2];
	let newList = [...list];

	if (item1 > item2) {
		newList[index1] = item2;
		newList[index2] = item1;
		childNode = bubbleSort({
			list: newList,
			index: indexDefined + 1,
			swapCount: swapCountDefined + 1,
			iteration: iterationDefined,
			success: successDefined,
		});
	} else if (item1 < item2) {
		newList[index1] = item1;
		newList[index2] = item2;
		childNode = bubbleSort({
			list: newList,
			index: indexDefined + 1,
			swapCount: swapCountDefined,
			iteration: iterationDefined,
			success: successDefined,
		});
	}

	return { ...node, childNode };
};
