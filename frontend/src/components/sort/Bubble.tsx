import React from "react";
import { NodeBubbleSort } from "../../../../types/typesSort";

interface BubbleProps {
	node: NodeBubbleSort;
}

const Bubble = ({ node }: BubbleProps) => {
	const { list, index, swapCount, iteration } = node;

	function getBarStyle(
		key: number,
		index: number | undefined,
		iteration: number | undefined
	): string {
		if (key === index) {
			return "border-2 border-white bg-green-900";
		} else if (iteration !== undefined && key > list.length - iteration - 1) {
			return "border-2 border-white bg-gray-700";
		}
		return "border-2 border-white";
	}

	function getCaption(key: number, index: number | undefined): string {
		if (key === index) {
			return "index";
		}
		return "-";
	}

	return (
		<div className={"w-full"}>
			<div className="w-40">
				<p>swapCount: {swapCount}</p>
				<p>iteration: {iteration}</p>
			</div>
			<ul className="flex justify-between w-full items-end">
				{list.map((i, key) => {
					const barStyle = getBarStyle(key, index, iteration);
					const caption = getCaption(key, index);

					return (
						<li key={key} className="flex-1 mx-1">
							<div style={{ height: `${i * 5}px` }} className={barStyle}></div>
							<div className="text-center">{i}</div>
							<div className="text-center">{caption}</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Bubble;
