"use client";

import React, { useEffect, useState } from "react";

// Types
import {
	NodeBubbleSort,
	NodeSelectionSort,
	InsertionSortProps,
	MergeSortProps,
	QuickSortProps,
} from "../../../../types/typesSort";

// Express utils
import {
	getBubbleSort,
	getSelectionSort,
	getInsertionSort,
	getMergeSort,
	getQuickSort,
} from "@/utils/express";

// Components
import AnimationHandler from "@/components/general/AnimationHandler";
import Bubble from "@/components/sort/Bubble";
import Selection from "@/components/sort/Selection";
import Insertion from "@/components/sort/Insertion";
import Merge from "@/components/sort/Merge";
import Quick from "@/components/sort/Quick";

const page = () => {
	const list = [22, 13, 71, 49, 37, 27, 11, 7, 42, 67, 103];
	const [mode, setMode] = useState<string>("bubble");

	// Data
	const [bubbleData, setBubbleData] = useState<NodeBubbleSort[]>([]);
	const [selectionData, setSelectionData] = useState<NodeSelectionSort[]>([]);
	const [insertionData, setInsertionData] = useState<InsertionSortProps[]>([]);
	const [mergeData, setMergeData] = useState<MergeSortProps[]>([]);
	const [quickData, setQuickData] = useState<QuickSortProps[]>([]);

	// Handlers
	const handleSetMode = (mode: string) => {
		setMode(mode);
	};

	// modesData
	const modesData = [
		{ name: "bubble", data: bubbleData, component: Bubble },
		{ name: "selection", data: selectionData, component: Selection },
		{ name: "insertion", data: insertionData, component: Insertion },
		{ name: "merge", data: mergeData, component: Merge },
		{ name: "quick", data: quickData, component: Quick },
	];

	// Fetch data
	useEffect(() => {
		const fetch = async () => {
			const resBubble: NodeBubbleSort[] = await getBubbleSort(list);
			setBubbleData(resBubble);
			const resSelection: NodeSelectionSort[] = await getSelectionSort(list);
			setSelectionData(resSelection);
			const resInsertion: InsertionSortProps[] = await getInsertionSort(list);
			setInsertionData(resInsertion);
			const resMerge: MergeSortProps[] = await getMergeSort(list);
			setMergeData(resMerge);
			const resQuick: QuickSortProps[] = await getQuickSort(list);
			setQuickData(resQuick);
		};
		fetch();
	}, [mode]);

	return (
		<div>
			<h2>Sort Algos</h2>
			<div>Select Mode: {mode}</div>
			<div className="flex justify-between">
				{modesData.map((m, key) => (
					<button key={key} onClick={() => handleSetMode(m.name)}>
						{m.name}
					</button>
				))}
			</div>
			<ul className="w-full flex justify-between">
				{list.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			<ul className="h-full">
				{modesData.map((m) => {
					if (mode === m.name && m.data !== undefined) {
						return <AnimationHandler data={m.data} Component={m.component} />;
					} else {
						return <></>;
					}
				})}
			</ul>
		</div>
	);
};

export default page;
