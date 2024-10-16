// Bubble sort
export type NodeBubbleSort = {
	list: number[];
	index?: number;
	swapCount?: number;
	iteration?: number;
	success?: boolean;
	childNode?: NodeBubbleSort;
};

// Selection sort
export type NodeSelectionSort = {
	list: number[];
	index?: number;
	indexLowest?: number;
	iteration?: number;
	success?: boolean;
	childNode?: NodeSelectionSort;
};
