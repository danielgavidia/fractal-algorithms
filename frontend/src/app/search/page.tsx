"use client";

import React, { useState } from "react";
import Linear from "./components/Linear";
import Binary from "./components/Binary";

const page = () => {
	const [list, setList] = useState<number[]>([54, 4, 27, 36, 22]);
	const [newNumber, setNewNumber] = useState<number>(0);
	const [target, setTarget] = useState<number>(0);
	const [mode, setMode] = useState<string>("linear");
	const [start, setStart] = useState<boolean>(false);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

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

	const handleSetStart = (bool: boolean) => {
		setStart(bool);
	};

	const handleStart = (bool: boolean) => {
		handleSetStart(bool);
		setCurrentIndex(0);
	};

	const handleSetCurrentIndex = (index: number) => {
		setCurrentIndex(index);
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
			<button onClick={() => handleStart(true)} className="border-2 border-white rounded-lg">
				Start Animation
			</button>
			{start && mode === "linear" ? (
				<>
					<Linear
						start={start}
						list={list}
						target={target}
						currentIndex={currentIndex}
						handleSetCurrentIndex={handleSetCurrentIndex}
						handleSetStart={handleSetStart}
					/>
				</>
			) : (
				<></>
			)}
			{start && mode === "binary" ? (
				<>
					<Binary start={start} list={list} target={target} />
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default page;
