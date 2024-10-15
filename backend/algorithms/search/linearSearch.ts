type Node = {
	list: any[];
	target: any;
	index?: number;
	success?: boolean;
	childNode?: Node;
};

export const linearSearch = (node: Node) => {
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
	const childNode: Node = linearSearch({
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
