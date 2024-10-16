"use client";

import React, { useEffect, useState } from "react";
import { NodeBubbleSort, NodeSelectionSort } from "../../../../types/typesSort";
import { getBubbleSort, getSelectionSort } from "@/utils/express";
import Bubble from "@/components/sort/Bubble";

const page = () => {
	const [list, setList] = useState<number[]>([49, 37, 27, 11, 7]);
	const [mode, setMode] = useState<string>("bubble");

	// Data
	const [bubbleData, setBubbleData] = useState<NodeBubbleSort[]>([]);
	const [selectionData, setSelectionData] = useState<NodeSelectionSort[]>([]);

	// Handlers
	const handleSetMode = (mode: string) => {
		setMode(mode);
	};

	// Fetch data
	useEffect(() => {
		const fetch = async () => {
			const resBubble: NodeBubbleSort[] = await getBubbleSort(list);
			setBubbleData(resBubble);
			const resSelection: NodeSelectionSort[] = await getSelectionSort(list);
			setSelectionData(resSelection);
		};
		fetch();
	}, [list]);

	return (
		<div>
			<h2>Sort Algos</h2>
			<div>Select Mode: {mode}</div>
			<div className="flex justify-between">
				<button
					onClick={() => handleSetMode("bubble")}
					className="border-2 border-white rounded-lg"
				>
					bubble
				</button>
				<button
					onClick={() => handleSetMode("selection")}
					className="border-2 border-white rounded-lg"
				>
					selection
				</button>
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
			{/* {mode === "binary" ? <><Binary data={binaryData} /></> : <></>} */}
		</div>
	);
};

export default page;
