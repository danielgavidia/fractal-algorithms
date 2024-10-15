import React, { useState, useEffect } from "react";
import axios from "axios";
import LinearAnimation from "./LinearAnimation";

export type Node = {
	list: number[];
	target: number;
	index: number;
	success: boolean;
};

interface LinearProps {
	start: boolean;
	list: number[];
	target: number;
}

const getAlgoOutput = async (list: number[], target: number): Promise<Node[]> => {
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

const Linear = ({ start, list, target }: LinearProps) => {
	const [algoOutput, setAlgoOutput] = useState<Node[] | null>(null);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

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
						return <LinearAnimation key={key} node={node} />;
					})}
				</div>
			)}
		</div>
	);
};

export default Linear;
