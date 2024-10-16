import React from "react";
import { NodeBubbleSort } from "../../../../types/typesSort";

interface BubbleProps {
	node: NodeBubbleSort;
}

const Bubble = ({ node }: BubbleProps) => {
	const { list, index, swapCount, iteration } = node;

	function getBarStyle(key: number, index: number | undefined): string {
		if (key === index) {
			return "border-2 border-white bg-green-900";
		}
		return "border-2 border-white";
	}

	return (
		<div className={"flex w-full"}>
			<div className="w-40">
				<p>swapCount: {swapCount}</p>
				<p>iteration: {iteration}</p>
			</div>
			<ul className="flex justify-between w-full items-end">
				{list.map((i, key) => {
					const barStyle = getBarStyle(key, index);
					return (
						<li key={key} className="flex-1 mx-1">
							<div style={{ height: `${i * 5}px` }} className={barStyle}></div>
							<div className="text-center">{i}</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Bubble;
