import type { NodeBubbleSort } from "../../../types/typesSort";

const bubbleSortAlgo = (node: NodeBubbleSort): NodeBubbleSort => {
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
	let childNode: NodeBubbleSort = { ...node };

	// If end of list iteration but swaps > 0, restart and mark failure
	if (indexDefined === list.length - 1 && swapCountDefined > 0) {
		childNode = bubbleSortAlgo({
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
		childNode = bubbleSortAlgo({
			list: newList,
			index: indexDefined + 1,
			swapCount: swapCountDefined + 1,
			iteration: iterationDefined,
			success: successDefined,
		});
	} else if (item1 < item2) {
		newList[index1] = item1;
		newList[index2] = item2;
		childNode = bubbleSortAlgo({
			list: newList,
			index: indexDefined + 1,
			swapCount: swapCountDefined,
			iteration: iterationDefined,
			success: successDefined,
		});
	}

	return { ...node, childNode };
};

const bubbleSortDecode = (node: NodeBubbleSort, array: NodeBubbleSort[]): NodeBubbleSort[] => {
	if (node.childNode === undefined) {
		let newArr = [...array];
		newArr.push({
			list: node.list,
			index: node.index,
			swapCount: node.swapCount,
			iteration: node.iteration,
			success: node.success,
		});
		return newArr;
	} else {
		let newArr = [...array];
		newArr.push({
			list: node.list,
			index: node.index,
			swapCount: node.swapCount,
			iteration: node.iteration,
			success: node.success,
		});
		return bubbleSortDecode(node.childNode, newArr);
	}
};

export const bubbleSort = (node: NodeBubbleSort): NodeBubbleSort[] => {
	const nodes = bubbleSortAlgo(node);
	const nodesDecoded = bubbleSortDecode(nodes, []);
	return nodesDecoded;
};
