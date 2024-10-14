interface BubbleSortProps {
	list: number[];
	index: number;
	swapCount: number;
}

const exampleList = [5, 1, 4, 2, 8, 3, 11, 17, 9];

const bubbleSort = ({ list, index, swapCount }: BubbleSortProps) => {
	if (index === 0) {
		console.log("---New iteration---");
	}

	let newList = list;
	if (index === list.length - 1 && swapCount === 0) {
		return "---Done---";
	} else if (index === list.length - 1 && swapCount !== 0) {
		console.log(`List: ${newList}. Index: ${index}. Swap count: ${swapCount}`);
		return bubbleSort({ list: newList, index: 0, swapCount: 0 });
	}

	const index1 = index;
	const index2 = index + 1;
	const item1 = list[index1];
	const item2 = list[index2];

	if (item1 > item2) {
		newList[index1] = item2;
		newList[index2] = item1;
		console.log(`List: ${newList}. Index: ${index}. Swap count: ${swapCount}`);
		return bubbleSort({ list: newList, index: index + 1, swapCount: swapCount + 1 });
	} else if (item1 < item2) {
		newList[index1] = item1;
		newList[index2] = item2;
		console.log(`List: ${newList}. Index: ${index}. Swap count: ${swapCount}`);
		return bubbleSort({ list: newList, index: index + 1, swapCount: swapCount });
	}
};

console.log(bubbleSort({ list: exampleList, index: 0, swapCount: 0 }));
