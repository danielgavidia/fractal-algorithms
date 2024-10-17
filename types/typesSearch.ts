// Linear search
export type NodeLinearSearch = {
	list: number[];
	index: number;
	success: boolean;
};

// Binary search
export type NodeBinarySearch = {
	list: number[]; // The list to be searched
	L: number; // The left bound
	R: number; // The right bound
	m: number; // The current target
	success: boolean;
};
