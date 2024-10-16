"use client";

import React, { useEffect, useState } from "react";

// Types
import { NodeBubbleSort, NodeSelectionSort, InsertionSortProps } from "../../../../types/typesSort";

// Express utils
import { getBubbleSort, getSelectionSort, getInsertionSort } from "@/utils/express";

// Components
import Bubble from "@/components/sort/Bubble";
import Selection from "@/components/sort/Selection";
import Insertion from "@/components/sort/Insertion";

const page = () => {
	// const [list, setList] = useState<number[]>([49, 37, 27, 11, 7]);
	const list = [49, 37, 27, 11, 7];
	const [mode, setMode] = useState<string>("bubble");

	// Data
	const [bubbleData, setBubbleData] = useState<NodeBubbleSort[]>([]);
	const [selectionData, setSelectionData] = useState<NodeSelectionSort[]>([]);
	const [insertionData, setInsertionData] = useState<InsertionSortProps[]>([]);

	// Handlers
	const handleSetMode = (mode: string) => {
		setMode(mode);
	};

	// const modes
	const modes = ["bubble", "selection", "insertion"];

	// Fetch data
	useEffect(() => {
		const fetch = async () => {
			const resBubble: NodeBubbleSort[] = await getBubbleSort(list);
			setBubbleData(resBubble);
			const resSelection: NodeSelectionSort[] = await getSelectionSort(list);
			setSelectionData(resSelection);
			const resInsertion: InsertionSortProps[] = await getInsertionSort(list);
			setInsertionData(resInsertion);
		};
		fetch();
	}, [list]);

	return (
		<div>
			<h2>Sort Algos</h2>
			<div>Select Mode: {mode}</div>
			<div className="flex justify-between">
				{modes.map((mode, key) => (
					<button key={key} onClick={() => handleSetMode(mode)}>
						{mode}
					</button>
				))}
			</div>
			<ul className="w-full flex justify-between">
				{list.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			{mode === "bubble" ? (
				<>
					<Bubble data={bubbleData} />
				</>
			) : (
				<></>
			)}
			{mode === "selection" ? (
				<>
					<Selection data={selectionData} />
				</>
			) : (
				<></>
			)}
			{mode === "insertion" ? (
				<>
					<Insertion data={insertionData} />
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default page;
