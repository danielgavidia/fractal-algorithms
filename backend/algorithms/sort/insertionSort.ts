interface InsertionSortProps {
	list: number[];
	sortedList?: number[];
	target?: number;
	index?: number;
	callback?: (state: InsertionSortProps) => void;
}

const insertionSortAlgo = ({
	list,
	sortedList = [],
	target = list[0],
	index = 0,
	callback,
}: InsertionSortProps) => {
	const startingConfig = {
		list: [...list],
		sortedList: [...sortedList],
		target: target,
		index: index,
	};
	if (callback) {
		callback(startingConfig);
	}

	if (list.length === 0) {
		return `Completed, sorted list: ${sortedList}`;
	} else if (sortedList.length === 0) {
		const newSortedList = [list[0]];
		list.shift();
		return insertionSortAlgo({
			list: list,
			sortedList: newSortedList,
			target: list[0],
			index: newSortedList.length - 1,
			callback,
		});
	} else if (target > sortedList[index]) {
		const newSortedList = [
			...sortedList.slice(0, index + 1),
			target,
			...sortedList.slice(index + 1),
		];
		list.shift();
		return insertionSortAlgo({
			list: list,
			sortedList: newSortedList,
			target: list[0],
			index: newSortedList.length - 1,
			callback,
		});
	} else if (target < sortedList[index] && index === 0) {
		sortedList.unshift(target);
		list.shift();
		return insertionSortAlgo({
			list: list,
			sortedList: sortedList,
			target: list[0],
			index: sortedList.length - 1,
			callback,
		});
	} else if (target < sortedList[index]) {
		return insertionSortAlgo({
			list: list,
			sortedList: sortedList,
			target: target,
			index: index - 1,
			callback,
		});
	}
};

export const insertionSort = (list: number[]): InsertionSortProps[] => {
	let history: InsertionSortProps[] = [];
	insertionSortAlgo({
		list: list,
		callback: (state) => history.push(state),
	});

	return history;
};

console.log(insertionSort([4, 11, 9, 38, 47, 12, 34]));
