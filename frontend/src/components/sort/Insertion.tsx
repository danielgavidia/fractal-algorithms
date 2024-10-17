import React from "react";
import { InsertionSortProps } from "../../../../types/typesSort";

interface InsertionProps {
	node: InsertionSortProps;
}

const Insertion = ({ node }: InsertionProps) => {
	const { list, sortedList, target, index } = node;

	function getBarStyle(
		key: number,
		item: number,
		target: number | undefined,
		index: number | undefined
	): string {
		if (key === index) {
			return "bg-red-500";
		} else if (item === target) {
			return "bg-green-500";
		}
		return "bg-gray-300";
	}

	function getCaption(
		key: number,
		item: number,
		target: number | undefined,
		index: number | undefined
	): string {
		if (key === index) {
			return "Index";
		} else if (item === target) {
			return "Target";
		}
		return ".";
	}

	return (
		<div className="w-full h-full flex flex-col">
			<div className="w-full border-b-2 border-gray-200 mb-2 pb-2">
				<p className="h-12 text-xs italic">Sorted List</p>
				<ul className="flex justify-between items-end w-full h-40">
					{sortedList &&
						sortedList.map((i, key) => {
							return (
								<li key={key} className="flex-1 mx-1 items-center">
									<div style={{ height: `${i * 1}px` }} className="bg-black"></div>
									<div className="text-center text-sm">{i}</div>
								</li>
							);
						})}
				</ul>
			</div>
			<div className="w-full">
				<p className="h-12 text-xs italic">Original List</p>
				<ul className="flex justify-between items-end w-full h-40">
					{list.map((i, key) => {
						const barStyle = getBarStyle(key, i, target, index);
						const caption = getCaption(key, i, target, index);

						return (
							<li key={key} className="flex-1 mx-1 items-center">
								<div style={{ height: `${i * 1}px` }} className={barStyle}></div>
								<div className="text-center text-sm">{i}</div>
								<div className="text-center text-sm">{caption}</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Insertion;
