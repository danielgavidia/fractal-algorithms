import React from "react";
import { BubbleSortProps } from "../../../../types/typesSort";

interface BubbleProps {
	node: BubbleSortProps;
}

const Bubble = ({ node }: BubbleProps) => {
	const { list, index, swapCount, iteration } = node;

	function getBarStyle(
		key: number,
		index: number | undefined,
		iteration: number | undefined
	): string {
		if (key === index) {
			return "bg-red-500";
		} else if (iteration !== undefined && key > list.length - iteration - 1) {
			return "bg-black";
		}
		return "bg-gray-300";
	}

	function getCaption(key: number, index: number | undefined): string {
		if (key === index) {
			return "index";
		}
		return ".";
	}

	return (
		<div className={"w-full h-full"}>
			<div className="w-full pb-4 h-12">
				<p className="text-xs italic">Swap Count: {swapCount}</p>
				<p className="text-xs italic">Iteration: {iteration}</p>
			</div>
			<ul className="flex justify-between w-full items-end h-full">
				{list.map((i, key) => {
					const barStyle = getBarStyle(key, index, iteration);
					const caption = getCaption(key, index);

					return (
						<li key={key} className="flex-1 mx-1">
							<div style={{ height: `${i * 2}px` }} className={barStyle}></div>
							<div className="text-center text-xs pt-2">{i}</div>
							<div className="text-center text-xs">{caption}</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Bubble;
