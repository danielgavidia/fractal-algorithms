import React from "react";
import { NodeSelectionSort } from "../../../../types/typesSort";

interface SelectionProps {
	node: NodeSelectionSort;
}
const Selection = ({ node }: SelectionProps) => {
	const { list, index, indexLowest, iteration } = node;

	function getBarStyle(
		key: number,
		index: number | undefined,
		indexLowest: number | undefined,
		iteration: number | undefined
	): string {
		if (key === index) {
			return "border-2 border-white bg-red-900";
		} else if (key === indexLowest) {
			return "border-2 border-white bg-green-900";
		} else if (iteration !== undefined && key < iteration) {
			return "border-2 border-white bg-gray-700";
		} else {
			return "border-2 border-white";
		}
	}

	function getCaption(
		key: number,
		index: number | undefined,
		indexLowest: number | undefined
	): string {
		if (key === index) {
			return "index";
		} else if (key === indexLowest) {
			return "lowest";
		}
		return "-";
	}

	return (
		<div className="w-full">
			<div className="w-40">
				<p>iteration: {iteration}</p>
			</div>
			<ul className="flex justify-between w-full items-end">
				{list.map((i, key) => {
					const barStyle = getBarStyle(key, index, indexLowest, iteration);
					const caption = getCaption(key, index, indexLowest);
					return (
						<li key={key} className="flex-1 mx-1">
							<div style={{ height: `${i * 5}px` }} className={barStyle}></div>
							<div className="text-center">{i}</div>
							<p className="text-center">{caption}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Selection;
