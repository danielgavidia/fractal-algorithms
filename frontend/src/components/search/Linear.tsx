import React, { useEffect, useState } from "react";
import { NodeLinearSearch } from "../../../../types/typesSearch";

// Main
interface LinearProps {
	data: NodeLinearSearch[];
}

const Linear = ({ data }: LinearProps) => {
	// Animation logic
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const [isPaused, setIsPaused] = useState<boolean>(false);

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null;

		if (isRunning && !isPaused && currentIndex < data.length - 1) {
			interval = setInterval(() => {
				setCurrentIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
			}, 2000);
		}

		if (currentIndex === data.length - 1) {
			setIsRunning(false);
		}

		// Cleanup the interval
		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	}, [isRunning, isPaused, currentIndex, data.length]);

	// Animation handlers
	const startAnimation = () => {
		setIsRunning(true);
		setIsPaused(false);
	};

	const pauseAnimation = () => {
		setIsPaused(true);
	};

	const resetAnimation = () => {
		setIsRunning(false);
		setIsPaused(false);
		setCurrentIndex(0);
	};

	return (
		<div className="text-green-400">
			<div className="flex space-x-4 mb-4">
				<button onClick={startAnimation} className="bg-blue-500 text-white px-4 py-2">
					Start
				</button>
				<button onClick={pauseAnimation} className="bg-yellow-500 text-white px-4 py-2">
					Pause
				</button>
				<button onClick={resetAnimation} className="bg-red-500 text-white px-4 py-2">
					Restart
				</button>
			</div>
			{data.length > 0 && <LinearAnimation node={data[currentIndex]} />}
		</div>
	);
};

// Animation
interface LinearAnimationProps {
	node: NodeLinearSearch;
}

const LinearAnimation = ({ node }: LinearAnimationProps) => {
	const { list, target, index } = node;
	const getBarStyle = (item: number, key: number, index: number, target: number): string => {
		if (key === index && item === target) {
			return "bg-white";
		} else if (key === index) {
			return "bg-red-900";
		} else if (item === target) {
			return "bg-green-900";
		} else {
			return "";
		}
	};

	return (
		<div>
			<ul className={"flex justify-between items-end"}>
				{list.map((i, key) => {
					const barStyle = getBarStyle(i, key, index, target);
					return (
						<li
							key={key}
							className={`flex-1 mx-1 border-2 border-white ${barStyle}`}
							style={{ height: `${i * 5}px` }}
						>
							<span className="block text-center">{i}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Linear;
