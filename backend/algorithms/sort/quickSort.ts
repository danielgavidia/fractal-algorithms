interface QuickSortProps {
	list: number[];
}

const exampleList = [38, 27, 43, 3, 9, 82, 10, 9, 1, 7, 3, 5, 4, 10];

const quickSort = ({ list }: QuickSortProps): number[] => {
	if (list.length <= 1) {
		return list;
	}
	const pivotIndex = Math.floor(Math.random() * list.length);
	const pivot = list[pivotIndex];
	let prePivot = [];
	let postPivot = [];
	for (let i = 0; i < list.length; i++) {
		if (i === pivotIndex) continue;
		else if (pivot > list[i]) {
			prePivot.push(list[i]);
		} else {
			postPivot.push(list[i]);
		}
	}

	prePivot = quickSort({ list: prePivot });
	postPivot = quickSort({ list: postPivot });

	return [...prePivot, pivot, ...postPivot];
};

console.log(quickSort({ list: exampleList }));
