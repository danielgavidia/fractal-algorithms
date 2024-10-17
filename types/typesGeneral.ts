import type {
	BubbleSortProps,
	NodeSelectionSort,
	InsertionSortProps,
	MergeSortProps,
	QuickSortProps,
} from "./typesSort";

import type { NodeLinearSearch, NodeBinarySearch } from "./typesSearch";

export type TypeGeneral =
	| BubbleSortProps
	| NodeSelectionSort
	| InsertionSortProps
	| MergeSortProps
	| QuickSortProps
	| NodeLinearSearch
	| NodeBinarySearch;
