import axios from "axios";

import type { NodeLinearSearch, NodeBinarySearch } from "../../../types/typesSearch";
import type {
	InsertionSortProps,
	MergeSortProps,
	BubbleSortProps,
	NodeSelectionSort,
	QuickSortProps,
} from "../../../types/typesSort";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

// Search: linear search
export async function getLinearSearch(list: number[], target: number): Promise<NodeLinearSearch[]> {
	const res = await axios({
		method: "POST",
		url: `${backendUrl}/algos/search/linear`,
		data: {
			list: list,
			target: target,
		},
	});
	return res.data;
}

// Search: binary search
export async function getBinarySearch(list: number[], target: number): Promise<NodeBinarySearch[]> {
	const res = await axios({
		method: "POST",
		url: `${backendUrl}/algos/search/binary`,
		data: {
			list: list,
			target: target,
		},
	});
	return res.data;
}

// Sort: bubble sort
export async function getBubbleSort(list: number[]): Promise<BubbleSortProps[]> {
	const res = await axios({
		method: "POST",
		url: `${backendUrl}/algos/sort/bubble`,
		data: {
			list: list,
		},
	});
	return res.data;
}

// Sort: selection sort
export async function getSelectionSort(list: number[]): Promise<NodeSelectionSort[]> {
	const res = await axios({
		method: "POST",
		url: `${backendUrl}/algos/sort/selection`,
		data: {
			list: list,
		},
	});
	return res.data;
}

// Sort: insertion sort
export async function getInsertionSort(list: number[]): Promise<InsertionSortProps[]> {
	const res = await axios({
		method: "POST",
		url: `${backendUrl}/algos/sort/insertion`,
		data: {
			list: list,
		},
	});
	return res.data;
}

// Sort: merge sort
export async function getMergeSort(list: number[]): Promise<MergeSortProps[]> {
	const res = await axios({
		method: "POST",
		url: `${backendUrl}/algos/sort/merge`,
		data: {
			list: list,
		},
	});
	return res.data;
}

// Sort: quick sort
export async function getQuickSort(list: number[]): Promise<QuickSortProps[]> {
	const res = await axios({
		method: "POST",
		url: `${backendUrl}/algos/sort/quick`,
		data: {
			list: list,
		},
	});
	return res.data;
}
