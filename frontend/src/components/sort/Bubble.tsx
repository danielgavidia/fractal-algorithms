import React from "react";
import { NodeBubbleSort } from "../../../../types/typesSort";

// Main
interface BubbleProps {
	data: NodeBubbleSort[];
}
const Bubble = ({ data }: BubbleProps) => {
	return (
		<div className="text-green-400">
			{data.map((node, key) => {
				return <BubbleAnimation key={key} node={node} />;
			})}
		</div>
	);
};

export default Bubble;

// Animation
interface BubbleAnimationProps {
	node: NodeBubbleSort;
}

const BubbleAnimation = ({ node }: BubbleAnimationProps) => {
	const { list, index, swapCount, iteration, success } = node;
	const generalBackground = success ? "bg-white" : "";

	function getBorder(key: number, index: number | undefined): string {
		if (key === index) {
			return "border-2 border-green-900";
		}
		return "";
	}

	return (
		<div className={"flex w-full border-2 border-white " + generalBackground}>
			<div className="w-40">
				<p>swapCount: {swapCount}</p>
				<p>iteration: {iteration}</p>
			</div>
			<ul className="flex justify-between w-full">
				{list.map((i, key) => {
					const border = getBorder(key, index);
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
