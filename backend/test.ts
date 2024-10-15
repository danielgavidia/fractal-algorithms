type linearSearchNode = {
	list: any[];
	target: any;
	index?: number;
	success?: boolean;
	childNode?: linearSearchNode;
};

const getNodes = (node: linearSearchNode, array: any[]) => {
	if (node.childNode === undefined) {
		let newArr = [...array];
		newArr.push({
			list: node.list,
			target: node.target,
			index: node.index,
			success: node.success,
		});
		return newArr;
	} else {
		let newArr = [...array];
		newArr.push({
			list: node.list,
			target: node.target,
			index: node.index,
			success: node.success,
		});
		return getNodes(node.childNode, newArr);
	}
};

const testOutput = {
	list: [54, 4, 27, 36, 22],
	target: 22,
	index: 0,
	childNode: {
		list: [54, 4, 27, 36, 22],
		target: 22,
		index: 1,
		success: false,
		childNode: {
			list: [54, 4, 27, 36, 22],
			target: 22,
			index: 2,
			success: false,
			childNode: {
				list: [54, 4, 27, 36, 22],
				target: 22,
				index: 3,
				success: false,
				childNode: { list: [54, 4, 27, 36, 22], target: 22, index: 4, success: true },
			},
		},
	},
};

console.log(getNodes(testOutput, []));
