type Node = {
	list: number[];
	target: number;
	index?: number;
	success?: boolean;
	childNode?: Node;
};

import type { NodeLinearSearch } from "../../../../types/typesSearch";

const linearSearchAlgo = (node: Node) => {
	const { list, target, index, success } = node;

	// Defaults
	const indexDefined = index === undefined ? 0 : index;
	const successDefined = success === undefined ? false : success;

	// Logic
	// If we get a match, return final node
	if (list[indexDefined] === target) {
		return { ...node, index: indexDefined, success: true };
	}

	// If the end of the list is reached without finding the target, return the node with failure
	if (indexDefined >= list.length - 1) {
		return { ...node, index: indexDefined, success: false };
	}

	// Recursively call the function and set the 'childNode'
	const childNode: Node = linearSearchAlgo({
		list,
		target,
		index: indexDefined + 1,
		success: successDefined,
	});

	return {
		...node,
		index: indexDefined,
		childNode,
	};
};

const linearSearchDecode = (node: Node, array: Node[]): Node[] => {
	if (node.childNode === undefined) {
		const newArr = [...array];
		newArr.push({
			list: node.list,
			target: node.target,
			index: node.index,
			success: node.success,
		});
		return newArr;
	} else {
		const newArr = [...array];
		newArr.push({
			list: node.list,
			target: node.target,
			index: node.index,
			success: node.success,
		});
		return linearSearchDecode(node.childNode, newArr);
	}
};

export const getLinearSearch = ({
	list,
	target,
}: {
	list: number[];
	target: number;
}): NodeLinearSearch[] => {
	const nodes = linearSearchAlgo({ list, target });
	const nodesDecoded = linearSearchDecode(nodes, []);
	const nodesFinal = nodesDecoded.map((node) => ({
		list: node.list,
		target: node.target,
		index: node.index ? node.index : 0,
	}));
	return nodesFinal;
};
