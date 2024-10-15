"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const page = () => {
	const [list, setList] = useState<number[]>([54, 4, 27, 36, 22]);
	const [newNumber, setNewNumber] = useState<number>(0);
	const [target, setTarget] = useState<number>(0);
	const [algoOutput, setAlgoOutput] = useState<string>("");

	const handleSetTarget = (i: number) => {
		setTarget(i);
	};

	const handleAddToList = (e: React.FormEvent) => {
		e.preventDefault();
		setList([...list, newNumber]);
		setNewNumber(0);
	};

	const getAlgoOutput = async () => {
		const res = await axios({
			method: "POST",
			url: "http://localhost:3001/algos/search/linear",
			data: {
				list: list,
				target: target,
			},
		});
		return res.data;
	};

	useEffect(() => {
		const fetch = async () => {
			const res = await getAlgoOutput();
			setAlgoOutput(JSON.stringify(res));
		};
		fetch();
	}, [target]);

	console.log("target", target);

	return (
		<div className="p-4 w-full">
			{/* <form className="w-full flex">
				<input value={list} />
				<input value={target} />
			</form> */}
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
			<div className="text-green-400">{algoOutput}</div>
		</div>
	);
};

export default page;
