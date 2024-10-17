import type { InsertionSortProps } from "../../../types/typesSort";

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

	// Return if list length equals 0
	if (list.length === 0) {
		return;
	}

	// If sorted list is empty, insert the first element
	if (sortedList.length === 0) {
		const newSortedList = [list[0]];
		list.shift();
		return insertionSortAlgo({
			list: list,
			sortedList: newSortedList,
			target: list[0],
			index: newSortedList.length - 1,
			callback,
		});
	}

	// Inserting the target into the sorted list in the correct position
	if (target >= sortedList[index]) {
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
	} else if (index === 0) {
		const newSortedList = [target, ...sortedList];
		list.shift();
		return insertionSortAlgo({
			list: list,
			sortedList: newSortedList,
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
		list: [...list],
		callback: (state) => history.push(state),
	});

	return history;
};
