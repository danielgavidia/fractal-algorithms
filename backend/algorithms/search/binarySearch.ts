type Node = {
	list: number[]; // The list to be searched
	target: number; // The target number
	L?: number; // The left bound
	R?: number; // The right bound
	success?: boolean;
	childNode?: Node; // Child node
};

export const binarySearch = (node: Node) => {
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
	let childNode = {};
	if (list[m] < target) {
		childNode = binarySearch({
			list,
			target,
			L: m + 1,
			R: RDefined,
			success: successDefined,
		});
	} else if (list[m] > target) {
		childNode = binarySearch({
			list,
			target,
			L: LDefined,
			R: m - 1,
			success: successDefined,
		});
	}

	return { ...node, L: LDefined, R: RDefined, m, childNode };
};
