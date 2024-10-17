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

// Utils
import {
	getBubbleSort,
	getSelectionSort,
	getInsertionSort,
	getMergeSort,
	getQuickSort,
} from "@/utils/express";
import { generateRandomArray } from "@/utils/functions";

// Components
import AnimationHandler from "@/components/general/AnimationHandler";
import Bubble from "@/components/sort/Bubble";
import Selection from "@/components/sort/Selection";
import Insertion from "@/components/sort/Insertion";
import Merge from "@/components/sort/Merge";
import Quick from "@/components/sort/Quick";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const leftBracket = "[";
const rightBracket = "]";

// Page
const page = () => {
	const [list, setList] = useState<number[]>([]);
	const [mode, setMode] = useState<string>("bubble");

	// Data
	const [bubbleData, setBubbleData] = useState<NodeBubbleSort[]>([]);
	const [selectionData, setSelectionData] = useState<NodeSelectionSort[]>([]);
	const [insertionData, setInsertionData] = useState<InsertionSortProps[]>([]);
	const [mergeData, setMergeData] = useState<MergeSortProps[]>([]);
	const [quickData, setQuickData] = useState<QuickSortProps[]>([]);

	// Generate random array
	useEffect(() => {
		const randomArray = generateRandomArray();
		setList(randomArray);
	}, []);

	// console.log(list);

	// Fetch data
	useEffect(() => {
		const fetch = async () => {
			if (list.length > 0) {
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
			}
		};
		fetch();
	}, [list]);

	// Handlers
	const handleSetMode = (mode: string) => {
		setMode(mode);
	};

	const handleSetList = () => {
		const randomArray = generateRandomArray();
		setList(randomArray);
	};

	// modesData
	const modesData = [
		{ name: "bubble", data: bubbleData, component: Bubble },
		{ name: "selection", data: selectionData, component: Selection },
		{ name: "insertion", data: insertionData, component: Insertion },
		{ name: "merge", data: mergeData, component: Merge },
		{ name: "quick", data: quickData, component: Quick },
	];

	return (
		<div className="p-4 w-full max-w-2xl mx-auto">
			<div className="flex-1 p-2 mb-2 border-b-2 border-gray-200">
				<ul className="w-full flex justify-between py-2">
					{leftBracket}
					{list.map((item, key) => {
						return <li key={key}>{item}</li>;
					})}
					{rightBracket}
					<button onClick={() => handleSetList()} className="w-10 hover:text-red-500">
						<FontAwesomeIcon icon={faArrowsRotate} />
					</button>
				</ul>
			</div>
			<div className="flex flex-col justify-between p-2 w-full border-b-2 border-gray-200 mb-2">
				<p className="text-xs py-1 italic">Select an algorithm</p>
				<ul className="flex justify-center space-x-4">
					{modesData.map((m, index) => {
						const buttonStyle = m.name === mode ? "text-red-500" : "";
						return (
							<button
								key={index}
								onClick={() => handleSetMode(m.name)}
								className={buttonStyle + " hover:text-red-500"}
							>
								{leftBracket}
								{m.name}
								{rightBracket}
							</button>
						);
					})}
				</ul>
			</div>
			<div>
				{modesData.map((m, index) => {
					if (mode === m.name && m.data !== undefined) {
						return <AnimationHandler key={index} data={m.data} Component={m.component} />;
					} else {
						return <></>;
					}
				})}
			</div>
		</div>
	);
};

export default page;
