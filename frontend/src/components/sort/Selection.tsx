import React from "react";
import { NodeSelectionSort } from "../../../../types/typesSort";

// Main
interface SelectionProps {
	data: NodeSelectionSort[];
}
const Selection = ({ data }: SelectionProps) => {
	return (
		<div>
			{data.map((node, key) => {
				return <SelectionAnimation key={key} node={node} />;
			})}
		</div>
	);
};

export default Selection;

// Animation
interface SelectionAnimationProps {
	node: NodeSelectionSort;
}
const SelectionAnimation = ({ node }: SelectionAnimationProps) => {
	const { list, index, indexLowest, iteration, success } = node;
	const generalBackground = success ? "bg-white" : "";

	function getBorder(
		key: number,
		index: number | undefined,
		indexLowest: number | undefined
	): string {
		if (key === index) {
			return "border-2 border-red-900";
		} else if (key === indexLowest) {
			return "border-2 border-green-900";
		}
		return "";
	}

	return (
		<div className={"flex w-full border-2 border-white " + generalBackground}>
			<div className="w-40">
				<p>iteration: {iteration}</p>
			</div>
			<ul className="flex justify-between w-full">
				{list.map((i, key) => {
					const border = getBorder(key, index, indexLowest);
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
