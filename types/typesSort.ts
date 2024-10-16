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

// Insertion sort
export interface InsertionSortProps {
	list: number[];
	sortedList?: number[];
	target?: number;
	index?: number;
	callback?: (state: InsertionSortProps) => void;
}

// Merge sort
export interface MergeSortProps {
	list: number[];
	level: number;
	left?: number[];
	right?: number[];
	callback?: (state: MergeSortProps) => void;
}

// Quick sort
export interface QuickSortProps {
	list: number[];
	level: number;
	prePivot?: number[];
	pivot?: number;
	postPivot?: number[];
	sorted?: number[];
	callback?: (state: QuickSortProps) => void;
}
