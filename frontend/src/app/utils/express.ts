import axios from "axios";

import type { NodeLinearSearch, NodeBinarySearch } from "../../../../types/typesSearch";

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
