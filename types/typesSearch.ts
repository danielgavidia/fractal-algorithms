// Linear search
export type NodeLinearSearch = {
	list: number[];
	target: number;
	index: number;
};

// Binary search
export type NodeBinarySearch = {
	list: number[]; // The list to be searched
	target: number; // The target number
	L: number; // The left bound
	R: number; // The right bound
	m: number;
};
