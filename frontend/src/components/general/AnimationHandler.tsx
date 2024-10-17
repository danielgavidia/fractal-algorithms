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
	const [action, setCurrentAction] = useState<string>("start");

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
		setCurrentAction("start");
	};

	const pauseAnimation = () => {
		setIsPaused(true);
		setCurrentAction("pause");
	};

	const resetAnimation = () => {
		setIsRunning(false);
		setIsPaused(false);
		setCurrentIndex(0);
		setCurrentAction("restart");
	};

	// Modes
	const actions = [
		{ action: "start", title: "Start", handler: startAnimation },
		{ action: "pause", title: "Pause", handler: pauseAnimation },
		{ action: "restart", title: "Restart", handler: resetAnimation },
	];

	return (
		<div className="flex flex-col w-full items-center">
			<div className="flex space-x-4 mb-4 justify-between w-80">
				{actions.map((a, key) => {
					const format =
						a.action === action
							? "bg-red-500 text-white border-[0.5px] border-red-500"
							: "border-[0.5px] border-black hover:bg-black hover:text-white";
					return (
						<button
							key={key}
							onClick={a.handler}
							className={format + " px-4 py-2 w-24"}
						>
							{a.title}
						</button>
					);
				})}
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
