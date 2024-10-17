import type { BubbleSortProps } from "../../../../types/typesSort";

const bubbleSortAlgo = ({
	list,
	index = 0,
	swapCount = 0,
	iteration = 0,
	callback,
}: BubbleSortProps) => {
	const currentConfig = {
		list: list,
		index: index,
		swapCount: swapCount,
		iteration: iteration,
	};
	if (callback) {
		callback(currentConfig);
	}
	const newList = [...list];
	if (index === list.length - 1 && swapCount === 0) {
		return;
	} else if (index === list.length - 1 && swapCount !== 0) {
		return bubbleSortAlgo({
			list: newList,
			index: 0,
			swapCount: 0,
			iteration: iteration + 1,
			callback,
		});
	}

	const index1 = index;
	const index2 = index + 1;
	const item1 = list[index1];
	const item2 = list[index2];

	if (item1 > item2) {
		newList[index1] = item2;
		newList[index2] = item1;
		return bubbleSortAlgo({
			list: newList,
			index: index + 1,
			swapCount: swapCount + 1,
			iteration: iteration,
			callback,
		});
	} else if (item1 < item2 || item1 === item2) {
		newList[index1] = item1;
		newList[index2] = item2;
		return bubbleSortAlgo({
			list: newList,
			index: index + 1,
			swapCount: swapCount,
			iteration: iteration,
			callback,
		});
	}
};

export const getBubbleSort = (list: number[]) => {
	const history: BubbleSortProps[] = [];
	bubbleSortAlgo({
		list: list,
		index: 0,
		swapCount: 0,
		iteration: 0,
		callback: (state) => history.push(state),
	});
	return history;
};
