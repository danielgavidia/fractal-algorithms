import type { QuickSortProps } from "../../../types/typesSort";

const quickSortAlgo = ({ list, level = 0, callback }: QuickSortProps): QuickSortProps => {
	if (list.length <= 1) {
		return { list: list, level };
	}
	const pivotIndex = Math.floor(Math.random() * list.length);
	const pivot = list[pivotIndex];
	let prePivot: QuickSortProps = { list: [], level: level };
	let postPivot: QuickSortProps = { list: [], level: level };

	for (let i = 0; i < list.length; i++) {
		if (i === pivotIndex) continue;
		else if (pivot > list[i]) {
			prePivot.list.push(list[i]);
		} else {
			postPivot.list.push(list[i]);
		}
	}

	if (callback) {
		callback({
			list: list,
			level: level,
			prePivot: prePivot.list,
			pivot: pivot,
			postPivot: postPivot.list,
			sorted: [...prePivot.list, pivot, ...postPivot.list],
		});
	}

	prePivot = quickSortAlgo({ list: prePivot.list, level: level + 1, callback });
	postPivot = quickSortAlgo({ list: postPivot.list, level: level + 1, callback });

	if (callback) {
		callback({
			list: list,
			level: level,
			prePivot: prePivot.list,
			pivot: pivot,
			postPivot: postPivot.list,
			sorted: [...prePivot.list, pivot, ...postPivot.list],
		});
	}

	return { list: [...prePivot.list, pivot, ...postPivot.list], level: level };
};

export const quickSort = (list: number[]) => {
	let history: QuickSortProps[] = [];
	quickSortAlgo({
		list: list,
		level: 0,
		callback: (state) => history.push(state),
	});

	return history;
};
