"use client";

import React, { useState, useEffect } from "react";
import Linear from "../../components/search/Linear";
import Binary from "../../components/search/Binary";

// Types
import type { NodeLinearSearch, NodeBinarySearch } from "../../../../types/typesSearch";

// Utils
import { getLinearSearch, getBinarySearch } from "../../utils/express";
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
const page = () => {
	const [list, setList] = useState<number[]>([]);
	const [target, setTarget] = useState<{ item: number; index: number }>({ item: 0, index: 0 });
	const [mode, setMode] = useState<string>("linear");

	const [linearData, setLinearData] = useState<NodeLinearSearch[]>([]);
	const [binaryData, setBinaryData] = useState<NodeBinarySearch[]>([]);

	// Generate random array
	useEffect(() => {
		const randomArray = generateRandomArray().sort((a, b) => a - b);
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

	// Handlers
	const handleSetList = () => {
		const randomArray = generateRandomArray().sort((a, b) => a - b);
		setList(randomArray);
	};

	const handleSetTarget = (i: { item: number; index: number }) => {
		setTarget(i);
	};

	const handleSetMode = (newMode: string) => {
		setMode(newMode);
	};

	// modesData
	const modesData = [
		{ name: "linear", data: linearData, component: Linear },
		{ name: "binary", data: binaryData, component: Binary },
	];

	return (
		<div className="p-4 w-full">
			<div className="flex border-b-2 border-gray-200 pb-2 mb-2">
				<div className="flex-1 p-2">
					<p className="text-xs py-1 italic">Select number to search</p>
					<ul className="w-full flex justify-between">
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
					</ul>
					<div className="w-full flex justify-center p-2">
						<button onClick={() => handleSetList()} className="w-10 hover:text-red-500">
							<FontAwesomeIcon icon={faArrowsRotate} />
						</button>
					</div>
				</div>
				<div className="flex flex-col justify-between border-l-2 border-black p-2">
					<p className="text-xs py-1 italic">Select an algorithm</p>
					{modesData.map((m, index) => {
						const buttonStyle = m.name === mode ? "text-red-500" : "";
						return (
							<button
								key={index}
								onClick={() => handleSetMode(m.name)}
								className={buttonStyle}
							>
								{m.name}
							</button>
						);
					})}
				</div>
			</div>
			<div>
				{modesData.map((m, index) => {
					if (mode === m.name && m.data !== undefined) {
						return (
							<AnimationHandler key={index} data={m.data} Component={m.component} />
						);
					} else {
						return <></>;
					}
				})}
			</div>
		</div>
	);
};

export default page;
