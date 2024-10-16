import axios from "axios";

import type { NodeLinearSearch, NodeBinarySearch } from "../../../types/typesSearch";
import type { NodeBubbleSort, NodeSelectionSort } from "../../../types/typesSort";

// Search: linear search
export async function getLinearSearch(list: number[], target: number): Promise<NodeLinearSearch[]> {
	const res = await axios({
		method: "POST",
		url: "http://localhost:3001/algos/search/linear",
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
		url: "http://localhost:3001/algos/search/binary",
		data: {
			list: list,
			target: target,
		},
	});
	return res.data;
}

// Sort: bubble sort
export async function getBubbleSort(list: number[]): Promise<NodeBubbleSort[]> {
	const res = await axios({
		method: "POST",
		url: "http://localhost:3001/algos/sort/bubble",
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
		url: "http://localhost:3001/algos/sort/selection",
		data: {
			list: list,
		},
	});
	return res.data;
}
