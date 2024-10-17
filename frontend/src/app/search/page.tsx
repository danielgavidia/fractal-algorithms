"use client";

import React, { useState, useEffect } from "react";
import Linear from "../../components/search/Linear";
import Binary from "../../components/search/Binary";

// Types
import type { NodeLinearSearch, NodeBinarySearch } from "../../../../types/typesSearch";

// Algos
import { getLinearSearch } from "@/algorithms/search/linearSearch";
import { getBinarySearch } from "@/algorithms/search/binarySearch";

// Utils
import AnimationHandler from "@/components/general/AnimationHandler";
import { generateRandomArray } from "@/utils/functions";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const leftBracket = "[";
const rightBracket = "]";

function getNumberFormat(targetIndex: number, key: number): string {
	if (targetIndex === key) {
		return "border-b-2 border-black";
	} else {
		return "";
	}
}

// Page
const Page = () => {
	const [list, setList] = useState<number[]>([]);
	const [target, setTarget] = useState<{ item: number; index: number }>({
		item: list[list.length - 2],
		index: list.length - 2,
	});
	const [mode, setMode] = useState<string>("linear");

	const [linearData, setLinearData] = useState<NodeLinearSearch[]>([]);
	const [binaryData, setBinaryData] = useState<NodeBinarySearch[]>([]);

	// Generate random array
	useEffect(() => {
		const randomArray = generateRandomArray().sort((a, b) => a - b);
		setList(randomArray);
		setTarget({ item: randomArray[randomArray.length - 2], index: randomArray.length - 2 });
	}, []);

	// Fetch linear and binary search data
	useEffect(() => {
		const fetch = async () => {
			if (list.length > 0) {
				const [resLinear, resBinary] = await Promise.all([
					getLinearSearch({ list, target: target.item }),
					getBinarySearch({ list, target: target.item }),
				]);
				setLinearData(resLinear);
				setBinaryData(resBinary);
			}
		};
		fetch();
	}, [target, list]);

	// Handlers
	const handleSetList = () => {
		const randomArray = generateRandomArray().sort((a, b) => a - b);
		setList(randomArray);
		setTarget({ item: randomArray[randomArray.length - 2], index: randomArray.length - 2 });
	};

	const handleSetTarget = (i: { item: number; index: number }) => {
		setTarget(i);
	};

	const handleSetMode = (newMode: string) => {
		setMode(newMode);
	};

	// modes data with initial states
	const modesData = [
		{
			name: "linear",
			data: linearData,
			component: Linear,
			initialState: { list: list, index: 0 },
		},
		{
			name: "binary",
			data: binaryData,
			component: Binary,
			initialState: {
				list: list,
				L: 0,
				R: list.length - 1,
				m: Math.floor((list.length - 1) / 2),
			},
		},
	];

	return (
		<div className="p-4 w-full max-w-2xl mx-auto">
			<p className="w-full text-center text-md font-bold">Search</p>
			<p className="w-full text-xs px-2 italic">Select a number</p>
			<div className="flex-1 px-2 mb-2 border-b-2 border-gray-200">
				<ul className="w-full flex justify-between py-2">
					{leftBracket}
					{list.map((item, key) => {
						const format = getNumberFormat(target.index, key);
						return (
							<li key={key}>
								<button
									onClick={() => handleSetTarget({ item, index: key })}
									className={format + " hover:text-red-500"}
								>
									{item}
								</button>
							</li>
						);
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
						return (
							<AnimationHandler
								key={index}
								data={{ frames: m.data, target: target.item, initialState: m.initialState }}
								Component={m.component}
							/>
						);
					} else {
						return <></>;
					}
				})}
			</div>
		</div>
	);
};

export default Page;
