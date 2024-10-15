type Node = {
	list: number[]; // The list to be searched
	target: number; // The target number
	L?: number; // The left bound
	R?: number; // The right bound
	m?: number;
	success?: boolean;
	childNode?: Node; // Child node
};

const binarySearchAlgo = (node: Node): Node => {
	const { list, target, L, R, success } = node;

	// Defaults
	const LDefined = L === undefined ? 0 : L;
	const RDefined = R === undefined ? list.length - 1 : R;
	const successDefined = success === undefined ? false : success;

	// Logic
	// Calculate the midpoint
	const m = Math.floor((LDefined + RDefined) / 2);

	// If we get a match, return final node
	if (list[m] === target) {
		return { ...node, L: LDefined, R: RDefined, m, success: true };
	}

	// If L < R, return failure
	if (LDefined > RDefined) {
		return { ...node, L: LDefined, R: RDefined, m, success: false };
	}

	// Recursively call the function and set the 'childNode'
	let childNode: Node = { ...node };

	if (list[m] < target) {
		childNode = binarySearchAlgo({
			list,
			target,
			L: m + 1,
			R: RDefined,
			success: successDefined,
		});
	} else if (list[m] > target) {
		childNode = binarySearchAlgo({
			list,
			target,
			L: LDefined,
			R: m - 1,
			success: successDefined,
		});
	}

	return { ...node, L: LDefined, R: RDefined, success: successDefined, m, childNode };
};

const binarySearchDecode = (node: Node, array: Node[]): Node[] => {
	if (node.childNode === undefined) {
		let newArr = [...array];
		newArr.push({
			list: node.list,
			target: node.target,
			L: node.L,
			R: node.R,
			m: node.m,
			success: node.success,
		});
		return newArr;
	} else {
		let newArr = [...array];
		newArr.push({
			list: node.list,
			target: node.target,
			L: node.L,
			R: node.R,
			m: node.m,
			success: node.success,
		});
		return binarySearchDecode(node.childNode, newArr);
	}
};

export const binarySearch = (node: Node): Node[] => {
	const nodes = binarySearchAlgo(node);
	const nodesDecoded = binarySearchDecode(nodes, []);
	return nodesDecoded;
};
