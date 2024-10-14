interface BinarySearchProps {
	list: number[];
	target: number;
	L: number;
	R: number;
}

const exampleList = [1, 3, 4, 6, 7, 8, 10, 13, 14, 18, 19, 21, 24, 37, 40, 45, 71];
const exampleTarget = 80;

const binarySearch = ({ list, target, L, R }: BinarySearchProps): string => {
	const m = Math.floor((L + R) / 2); // m = the position of the middle element
	if (L > R) {
		return `Search unsuccessful: ${target} not found in list`;
	} else if (list[m] < target) {
		console.log(`Retry initiated: target ${target} not found at index: ${m}`);
		return binarySearch({ list: list, target: target, L: m + 1, R: list.length - 1 });
	} else if (list[m] > target) {
		console.log(`Retry initiated: target ${target} not found at index: ${m}`);
		return binarySearch({ list: list, target: target, L: L, R: m - 1 });
	} else if (list[m] === target) {
		return `Success: target ${target} found at index: ${m}`;
	}
	return "";
};

console.log(
	binarySearch({ list: exampleList, target: exampleTarget, L: 0, R: exampleList.length - 1 })
);
