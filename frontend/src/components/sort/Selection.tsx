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
			return "bg-red-500";
		} else if (key === indexLowest) {
			return "bg-green-500";
		} else if (iteration !== undefined && key < iteration) {
			return "bg-black";
		} else {
			return "bg-gray-300";
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
		return ".";
	}

	return (
		<div className="w-full h-full">
			<div className="w-full pb-4 h-12">
				<p className="text-xs italic">Iteration: {iteration}</p>
			</div>
			<ul className="flex justify-between w-full items-end h-full">
				{list.map((i, key) => {
					const barStyle = getBarStyle(key, index, indexLowest, iteration);
					const caption = getCaption(key, index, indexLowest);
					return (
						<li key={key} className="flex-1 mx-1">
							<div style={{ height: `${i * 2}px` }} className={barStyle}></div>
							<div className="text-center text-xs pt-2">{i}</div>
							<p className="text-center text-xs">{caption}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Selection;
