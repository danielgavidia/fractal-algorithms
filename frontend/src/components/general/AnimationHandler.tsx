import React, { useEffect, useState } from "react";
import type { TypeGeneral } from "../../../../types/typesGeneral";

interface AnimationHandlerData {
	frames: TypeGeneral[]; // where do the frames come from? THE SERVER.
	target?: number; // target is used for search animations.
	initialState?: TypeGeneral; // this comes from the FRONTEND actually.
}

interface AnimationHandlerProps {
	data: AnimationHandlerData;
	Component: React.ElementType;
}

// Component
const AnimationHandler = ({ data, Component }: AnimationHandlerProps) => {
	// Animation logic
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const [isPaused, setIsPaused] = useState<boolean>(false);
	const [action, setCurrentAction] = useState<string>("start");

	function getCurrentFrame() {
		if (data.initialState && currentIndex == 0 && !isRunning) {
			return data.initialState;
		}
		return data.frames[currentIndex];
	}

	// Speed
	const [speed, setSpeed] = useState<number>(1000);
	const interval = 200;
	const lowerBound = 100;
	const upperBound = 2000;

	// Animation
	useEffect(() => {
		if (!data.frames) return;
		let interval: NodeJS.Timeout | null = null;

		if (isRunning && !isPaused && currentIndex < data.frames.length - 1) {
			interval = setInterval(() => {
				setCurrentIndex((prev) => (prev < data.frames.length - 1 ? prev + 1 : 0));
			}, speed);
		}

		if (currentIndex === data.frames.length - 1) {
			setIsRunning(false);
		}

		// Cleanup the interval
		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	}, [isRunning, isPaused, currentIndex, speed, data.frames]);

	// Restart animation when data/Component changes
	useEffect(() => {
		resetAnimation();
	}, [data, Component]);

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

	const handleSetSpeed = (increase: boolean) => {
		if (increase && speed + interval < upperBound) {
			setSpeed((prevSpeed) => prevSpeed + interval);
		} else if (!increase && speed - interval > lowerBound) {
			setSpeed((prevSpeed) => prevSpeed - interval);
		}
	};

	// Modes
	const actions = [
		{ action: "start", title: "Start", handler: startAnimation },
		{ action: "pause", title: "Pause", handler: pauseAnimation },
		{ action: "restart", title: "Restart", handler: resetAnimation },
	];

	return (
		<div className="flex flex-col w-full items-center pt-2">
			<div className="flex space-x-4 mb-4 justify-center w-full">
				{actions.map((a, key) => {
					const format =
						a.action === action
							? "bg-red-500 text-white border-[0.5px] border-red-500"
							: "border-[0.5px] border-black hover:bg-black hover:text-white";
					return (
						<button key={key} onClick={a.handler} className={format + " px-4 py-2 w-24 text-sm"}>
							{a.title}
						</button>
					);
				})}
			</div>
			<p className="w-80 text-xs text-center">{speed} ms</p>
			<div className="flex space-x-4 justify-center items-center w-full border-b-2 border-gray-200 pb-2">
				<button onClick={() => handleSetSpeed(false)} className="p-2 hover:text-red-500">
					-
				</button>
				<input
					type="range"
					min={lowerBound}
					max={upperBound}
					value={speed}
					onChange={(e) => setSpeed(Number(e.target.value))}
					className="p-2 accent-red-500 cursor-pointer appearance-none border-[0.5px] border-black h-6 w-60"
				/>
				<button onClick={() => handleSetSpeed(true)} className="p-2 hover:text-red-500">
					+
				</button>
			</div>
			<div className="py-4 h-72 w-full">
				{data.frames !== undefined &&
				data.frames.length > 0 &&
				data.frames[currentIndex] !== undefined ? (
					<>
						<Component node={getCurrentFrame()} target={data.target} />
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default AnimationHandler;
