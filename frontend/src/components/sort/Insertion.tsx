import React from "react";
import { InsertionSortProps } from "../../../../types/typesSort";

interface InsertionProps {
	node: InsertionSortProps;
}

const Insertion = ({ node }: InsertionProps) => {
	const { list, sortedList, target, index } = node;

	function getBorder(
		key: number,
		item: number,
		target: number | undefined,
		index: number | undefined
	): string {
		if (key === index) {
			return "border-2 border-red-900";
		} else if (item === target) {
			return "border-2 border-green-900";
		}
		return "";
	}

	return (
		<div className={"w-full border-2 border-white"}>
			<p>Original List</p>
			<ul className="flex justify-between w-full">
				{list.map((i, key) => {
					const border = getBorder(key, i, target, index);
					return (
						<li key={key} className={border}>
							{i}
						</li>
					);
				})}
			</ul>
			<p>Sorted List</p>
			<ul className="flex justify-between w-full">
				{sortedList &&
					sortedList.map((i, key) => {
						return <li key={key}>{i}</li>;
					})}
			</ul>
		</div>
	);
};

export default Insertion;
