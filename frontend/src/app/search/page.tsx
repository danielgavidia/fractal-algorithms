"use client";

import React, { useState, useEffect } from "react";
import Linear from "../../components/search/Linear";
import Binary from "../../components/search/Binary";

// Types
import type { NodeLinearSearch, NodeBinarySearch } from "../../../../types/typesSearch";

// Utils
import { getLinearSearch, getBinarySearch } from "../../utils/express";
import AnimationHandler from "@/components/general/AnimationHandler";

// Generate random array
function generateRandomArray(): number[] {
	const randomArray: number[] = [];
	for (let i = 0; i < 12; i++) {
		const randomNumber = Math.floor(Math.random() * 101); // Random number between 0 and 100
		randomArray.push(randomNumber);
	}
	return randomArray;
}

const page = () => {
	const [list, setList] = useState<number[]>([]);
	const [target, setTarget] = useState<{ item: number; index: number }>({ item: 0, index: 0 });
	const [mode, setMode] = useState<string>("linear");

	const [linearData, setLinearData] = useState<NodeLinearSearch[]>([]);
	const [binaryData, setBinaryData] = useState<NodeBinarySearch[]>([]);

	// Generate random array
	useEffect(() => {
		const randomArray = generateRandomArray();
		setList(randomArray);
		setTarget({ item: randomArray[0], index: 0 });
	}, []);

	// Fetch linear and binary search data
	useEffect(() => {
		const fetch = async () => {
			if (list.length > 0) {
				const resLinear: NodeLinearSearch[] = await getLinearSearch(list, target.item);
				setLinearData(resLinear);
				const resBinary: NodeBinarySearch[] = await getBinarySearch(list, target.item);
				setBinaryData(resBinary);
			}
		};
		fetch();
	}, [target, list]);

	const handleSetTarget = (i: { item: number; index: number }) => {
		setTarget(i);
	};

	const handleSetMode = (newMode: string) => {
		setMode(newMode);
	};

	const leftBracket = "[";
	const rightBracket = "]";

	function getNumberFormat(targetIndex: number, key: number): string {
		if (targetIndex === key) {
			return "bg-sky-100";
		} else {
			return "";
		}
	}

	return (
		<div className="p-4 w-full">
			<p>Select number to search</p>
			<ul className="w-full flex justify-between">
				{leftBracket}
				{list.map((item, key) => {
					const format = getNumberFormat(target.index, key);
					return (
						<li key={key}>
							<button
								onClick={() => handleSetTarget({ item, index: key })}
								className={format}
							>
								{item}
							</button>
						</li>
					);
				})}
				{rightBracket}
			</ul>
			<div>Select Mode: {mode}</div>
			<div className="flex justify-between">
				<button
					onClick={() => handleSetMode("linear")}
					className="border-2 border-white rounded-lg"
				>
					linear
				</button>
				<button
					onClick={() => handleSetMode("binary")}
					className="border-2 border-white rounded-lg"
				>
					binary
				</button>
			</div>
			{mode === "linear" ? (
				<>
					<AnimationHandler data={linearData} Component={Linear} />
				</>
			) : (
				<></>
			)}
			{mode === "binary" ? (
				<>
					<AnimationHandler data={binaryData} Component={Binary} />
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default page;
