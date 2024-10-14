interface InsertionSortProps {
	list: number[];
	sortedList: number[];
	target: number;
	index: number;
}

const exampleList = [9, 1, 7, 3, 5, 4, 10];

const insertionSort = ({ list, sortedList, target, index }: InsertionSortProps) => {
	const startingConfig = {
		list: list,
		sortedList: sortedList,
		target: target,
		index: index,
	};
	console.log(startingConfig);

	if (list.length === 0) {
		return `Completed, sorted list: ${sortedList}`;
	} else if (sortedList.length === 0) {
		const newSortedList = [list[0]];
		list.shift();
		return insertionSort({
			list: list,
			sortedList: newSortedList,
			target: list[0],
			index: newSortedList.length - 1,
		});
	} else if (target > sortedList[index]) {
		const newSortedList = [
			...sortedList.slice(0, index + 1),
			target,
			...sortedList.slice(index + 1),
		];
		list.shift();
		return insertionSort({
			list: list,
			sortedList: newSortedList,
			target: list[0],
			index: newSortedList.length - 1,
		});
	} else if (target < sortedList[index] && index === 0) {
		sortedList.unshift(target);
		list.shift();
		return insertionSort({
			list: list,
			sortedList: sortedList,
			target: list[0],
			index: sortedList.length - 1,
		});
	} else if (target < sortedList[index]) {
		return insertionSort({
			list: list,
			sortedList: sortedList,
			target: target,
			index: index - 1,
		});
	}
};

console.log(
	insertionSort({
		list: exampleList,
		sortedList: [],
		target: exampleList[0],
		index: 0,
	})
);
