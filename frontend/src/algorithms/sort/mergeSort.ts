import type { MergeSortProps } from "../../../types/typesSort";

const mergeSortAlgo = ({ list, level, callback }: MergeSortProps): MergeSortProps => {
	if (list.length <= 1) {
		if (callback) {
			callback({ list: [...list], level: level, left: [], right: [] });
		}
		return { list: list, level: level };
	}

	// Callback #1: record current split
	let left: number[] = [];
	let right: number[] = [];

	for (let i = 0; i < list.length; i++) {
		if (i % 2 === 0) {
			left.push(list[i]);
		} else {
			right.push(list[i]);
		}
	}

	if (callback) {
		callback({ list: [...list], level: level, left: [...left], right: [...right] });
	}

	const leftResult = mergeSortAlgo({ list: left, level: level + 1, callback: callback });
	const rightResult = mergeSortAlgo({ list: right, level: level + 1, callback: callback });
	const merged = merge(leftResult.list, rightResult.list);

	if (callback) {
		callback({
			list: merged,
			level: level,
			left: leftResult.list,
			right: rightResult.list,
		});
	}

	return { list: merged, level: level };
};

const merge = (left: number[], right: number[]): number[] => {
	let merged: number[] = [];

	while (left.length !== 0 && right.length !== 0) {
		if (left[0] <= right[0]) {
			merged.push(left.shift()!);
		} else {
			merged.push(right.shift()!);
		}
	}

	return merged.concat(left).concat(right);
};

export const mergeSort = (list: number[]): MergeSortProps[] => {
	let history: MergeSortProps[] = [];
	mergeSortAlgo({
		list: list,
		level: 0,
		callback: (state) => history.push({ ...state }),
	});

	return history;
};

const exampleList = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(exampleList));
