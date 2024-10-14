interface MergeSortProps {
	list: number[];
}

const exampleList = [38, 27, 43, 3, 9, 82, 10];

const mergeSort = ({ list }: MergeSortProps) => {
	if (list.length <= 1) {
		return list;
	}
	let left: number[] = [];
	let right: number[] = [];
	for (let i = 0; i < list.length; i++) {
		if (i % 2 === 0) {
			left.push(list[i]);
		} else {
			right.push(list[i]);
		}
	}

	left = mergeSort({ list: left });
	right = mergeSort({ list: right });
	return merge(left, right);
};

const merge = (left: number[], right: number[]) => {
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

console.log(mergeSort({ list: exampleList }));
