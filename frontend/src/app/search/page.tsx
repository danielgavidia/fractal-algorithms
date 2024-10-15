"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

type Node = {
	list: number[];
	target: number;
	index: number;
	success: boolean;
};

interface AnimationProps {
	node: Node;
}

const Animation = ({ node }: AnimationProps) => {
	const { list, target, index, success } = node;
	// const border =
	const getBorder = (item: number, key: number, index: number, target: number): string => {
		if (key === index) {
			return "border-2 border-red-900";
		} else if (item === target) {
			return "border-2 border-green-900";
		} else {
			return "";
		}
	};

	const generalBackground = success ? "bg-white" : "";
	return (
		<div>
			<ul className={"flex justify-between " + generalBackground}>
				{list.map((i, key) => {
					const border = getBorder(i, key, index, target);
					console.log("item", i);
					console.log("target", target);
					return (
						<li key={key} className={border}>
							{i}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

const page = () => {
	const [list, setList] = useState<number[]>([54, 4, 27, 36, 22]);
	const [newNumber, setNewNumber] = useState<number>(0);
	const [target, setTarget] = useState<number>(0);
	const [algoOutput, setAlgoOutput] = useState<Node[] | null>(null);

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
			console.log(res);
			setAlgoOutput(res);
		};
		fetch();
	}, [target]);

	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		if (algoOutput !== null && currentIndex < algoOutput.length - 1) {
			const timer = setTimeout(() => {
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [currentIndex, algoOutput]);

	console.log("target", target);

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
			<div className="text-green-400">
				{algoOutput && (
					<div>
						{algoOutput.slice(0, currentIndex + 1).map((x, key) => {
							return <Animation key={key} node={x} />;
						})}
					</div>
					// <div>
					// 	<Animation node={algoOutput[currentIndex]} />
					// </div>
				)}
			</div>
		</div>
	);
};

export default page;
