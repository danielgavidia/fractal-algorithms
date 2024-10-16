import React, { useEffect, useState } from "react";

// Main
interface AnimationHandlerProps {
	data: any[];
	Component: React.ElementType;
}

// Component
const AnimationHandler = ({ data, Component }: AnimationHandlerProps) => {
	// Animation logic
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const [isPaused, setIsPaused] = useState<boolean>(false);

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null;

		if (isRunning && !isPaused && currentIndex < data.length - 1) {
			interval = setInterval(() => {
				setCurrentIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
			}, 500);
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
		<div className="flex flex-col text-green-400 w-full items-center">
			<div className="flex space-x-4 mb-4 justify-between w-80">
				<button onClick={startAnimation} className="bg-black text-white px-4 py-2 w-24">
					Start
				</button>
				<button onClick={pauseAnimation} className="bg-black text-white px-4 py-2 w-24">
					Pause
				</button>
				<button onClick={resetAnimation} className="bg-black text-white px-4 py-2 w-24">
					Restart
				</button>
			</div>
			{data !== undefined && data.length > 0 && data[currentIndex] !== undefined ? (
				<>
					<Component node={data[currentIndex]} />
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default AnimationHandler;
