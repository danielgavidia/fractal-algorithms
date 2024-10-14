interface SelectionSortProps {
	list: number[];
	index: number;
	indexLowest: number;
	iteration: number;
}

const exampleList = [64, 25, 12, 22, 11, 5, 37];

const selectionSort = ({ list, index, indexLowest, iteration }: SelectionSortProps) => {
	const currentConfig = {
		list: list,
		index: index,
		indexLowest: indexLowest,
		iteration: iteration,
	};

	if (iteration === list.length - 1) {
		return "Completed";
	} else if (index === list.length - 1 && list[indexLowest] < list[index]) {
		console.log(currentConfig);
		let newList = [...list.slice(0, indexLowest), ...list.slice(indexLowest + 1)];
		newList.splice(iteration, 0, list[indexLowest]);
		const newConfig = {
			list: newList,
			index: iteration + 1,
			indexLowest: iteration + 1,
			iteration: iteration + 1,
		};
		return selectionSort(newConfig);
	} else if (index === list.length - 1 && list[indexLowest] > list[index]) {
		console.log(currentConfig);
		let newList = [...list.slice(0, index), ...list.slice(index + 1)];
		newList.splice(iteration, 0, list[index]);
		const newConfig = {
			list: newList,
			index: iteration + 1,
			indexLowest: iteration + 1,
			iteration: iteration + 1,
		};
		return selectionSort(newConfig);
	} else if (list[indexLowest] < list[index]) {
		console.log(currentConfig);
		const newConfig = {
			list: list,
			index: index + 1,
			indexLowest: indexLowest,
			iteration: iteration,
		};
		return selectionSort(newConfig);
	} else if (list[indexLowest] > list[index]) {
		console.log(currentConfig);
		const newConfig = {
			list: list,
			index: index + 1,
			indexLowest: index,
			iteration: iteration,
		};
		return selectionSort(newConfig);
	} else if (list[indexLowest] === list[index]) {
		console.log(currentConfig);
		const newConfig = {
			list: list,
			index: index + 1,
			indexLowest: indexLowest,
			iteration: iteration,
		};
		return selectionSort(newConfig);
	}
};

console.log(selectionSort({ list: exampleList, index: 0, indexLowest: 0, iteration: 0 }));
