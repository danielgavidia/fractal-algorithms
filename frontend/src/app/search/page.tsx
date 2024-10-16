"use client";

import React, { useState, useEffect } from "react";
import Linear from "../components/Linear";
import Binary from "../components/Binary";

// Types
import type { NodeLinearSearch, NodeBinarySearch } from "../../../../types/typesSearch";

// Utils
import { getLinearSearch, getBinarySearch } from "../utils/express";

const page = () => {
	const [list, setList] = useState<number[]>([8, 12, 21, 33, 47]);
	const [newNumber, setNewNumber] = useState<number>(0);
	const [target, setTarget] = useState<number>(0);
	const [mode, setMode] = useState<string>("linear");

	const [linearData, setLinearData] = useState<NodeLinearSearch[]>([]);
	const [binaryData, setBinaryData] = useState<NodeBinarySearch[]>([]);

	useEffect(() => {
		const fetch = async () => {
			const resLinear: NodeLinearSearch[] = await getLinearSearch(list, target);
			setLinearData(resLinear);
			const resBinary: NodeBinarySearch[] = await getBinarySearch(list, target);
			setBinaryData(resBinary);
		};
		fetch();
	}, [target, list]);

	const handleSetTarget = (i: number) => {
		setTarget(i);
	};

	const handleAddToList = (e: React.FormEvent) => {
		e.preventDefault();
		setList([...list, newNumber]);
		setNewNumber(0);
	};

	const handleSetMode = (newMode: string) => {
		setMode(newMode);
	};

	return (
		<div className="p-4 w-full">
			<h2>Linear Search Algo</h2>
			<form onSubmit={handleAddToList} className="w-full">
				<input
					value={newNumber}
					onChange={(e) => setNewNumber(Number(e.target.value))}
					placeholder="Add number to list"
					className="w-full text-black"
				/>
				<button onClick={handleAddToList}>+</button>
			</form>
			<div>Target: {target}</div>
			<ul className="w-full flex justify-between">
				{list.map((item, index) => (
					<li key={index}>
						<button onClick={() => handleSetTarget(item)}>{item}</button>
					</li>
				))}
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
					<Linear data={linearData} />
				</>
			) : (
				<></>
			)}
			{mode === "binary" ? (
				<>
					<Binary data={binaryData} />
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default page;
