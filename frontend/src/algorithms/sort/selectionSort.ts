import type { NodeSelectionSort } from "../../../../types/typesSort";

const selectionSortAlgo = (node: NodeSelectionSort): NodeSelectionSort => {
	const { list, index, indexLowest, iteration, success } = node;

	// Defaults
	const indexDefined = index === undefined ? 0 : index;
	const indexLowestDefined = indexLowest === undefined ? indexDefined : indexLowest;
	const iterationDefined = iteration === undefined ? 0 : iteration;
	const successDefined = success === undefined ? false : success;

	// Base case: if iteration reaches the end of the list, the sorting is complete
	if (iterationDefined === list.length - 1) {
		return {
			...node,
			index: indexDefined,
			indexLowest: indexLowestDefined,
			iteration: iterationDefined,
			success: true,
		};
	}

	// If index reaches the end of the list, swap the lowest found element with the current iteration index
	if (indexDefined === list.length) {
		const newList: number[] = [...list];
		// Perform swap
		const temp = newList[iterationDefined];
		newList[iterationDefined] = newList[indexLowestDefined];
		newList[indexLowestDefined] = temp;

		return selectionSortAlgo({
			list: newList,
			index: iterationDefined + 1,
			indexLowest: iterationDefined + 1,
			iteration: iterationDefined + 1,
			success: successDefined,
		});
	}

	// Recursive call: find the lowest element in the unsorted portion
	let childNode: NodeSelectionSort;

	// If list[index] < lowest item, update indexLowest
	if (list[indexDefined] < list[indexLowestDefined]) {
		childNode = selectionSortAlgo({
			list: list,
			index: indexDefined + 1,
			indexLowest: indexDefined,
			iteration: iterationDefined,
			success: successDefined,
		});
	}
	// If list[index] > lowest item, continue without updating indexLowest
	else {
		childNode = selectionSortAlgo({
			list: list,
			index: indexDefined + 1,
			indexLowest: indexLowestDefined,
			iteration: iterationDefined,
			success: successDefined,
		});
	}

	return {
		...node,
		index: indexDefined,
		indexLowest: indexLowestDefined,
		iteration: iterationDefined,
		success: successDefined,
		childNode,
	};
};

const selectionSortDecode = (
	node: NodeSelectionSort,
	array: NodeSelectionSort[]
): NodeSelectionSort[] => {
	if (node.childNode === undefined) {
		let newArr = [...array];
		newArr.push({
			list: node.list,
			index: node.index,
			indexLowest: node.indexLowest,
			iteration: node.iteration,
			success: node.success,
		});
		return newArr;
	} else {
		let newArr = [...array];
		newArr.push({
			list: node.list,
			index: node.index,
			indexLowest: node.indexLowest,
			iteration: node.iteration,
			success: node.success,
		});
		return selectionSortDecode(node.childNode, newArr);
	}
};

export const getSelectionSort = (list: number[]): NodeSelectionSort[] => {
	const nodes = selectionSortAlgo({ list: list });
	const nodesDecoded = selectionSortDecode(nodes, []);
	return nodesDecoded;
};
