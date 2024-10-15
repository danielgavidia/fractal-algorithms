import React, { useState, useEffect } from "react";
import axios from "axios";
// import LinearAnimation from "./LinearAnimation";
import BinearAnimation from "./BinaryAnimation";

export type Node = {
	list: number[]; // The list to be searched
	target: number; // The target number
	L: number; // The left bound
	R: number; // The right bound
	m: number; // The current target
	success: boolean;
};

interface LinearProps {
	start: boolean;
	list: number[];
	target: number;
}

async function getAlgoOutput(list: number[], target: number): Promise<Node[]> {
	const res = await axios({
		method: "POST",
		url: "http://localhost:3001/algos/search/binary",
		data: {
			list: list,
			target: target,
		},
	});
	return res.data;
}

// Component
const Binary = ({ start, list, target }: LinearProps) => {
	const [algoOutput, setAlgoOutput] = useState<Node[] | null>(null);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	console.log(algoOutput);

	useEffect(() => {
		if (start) {
			const fetch = async () => {
				const res: Node[] = await getAlgoOutput(list, target);
				setAlgoOutput(res);
			};
			fetch();
		}
	}, []);

	useEffect(() => {
		if (algoOutput !== null && currentIndex < algoOutput.length - 1) {
			const timer = setTimeout(() => {
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, [currentIndex, algoOutput]);

	return (
		<div className="text-green-400">
			{algoOutput && (
				<div>
					{algoOutput.slice(0, currentIndex + 1).map((node, key) => {
						return <BinearAnimation key={key} node={node} />;
					})}
				</div>
			)}
		</div>
	);
};

export default Binary;
