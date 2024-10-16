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
			return "border-2 border-white bg-red-900";
		} else if (item === target) {
			return "border-2 border-white bg-green-900";
		}
		return "border-2 border-white";
	}

	function getCaption(
		key: number,
		item: number,
		target: number | undefined,
		index: number | undefined
	): string {
		if (key === index) {
			return "index";
		} else if (item === target) {
			return "target";
		}
		return "-";
	}

	return (
		<div className="w-full flex h-full">
			<div className="w-full border-2 border-gray-800 h-full">
				<p className="h-20">Sorted List</p>
				<ul className="flex justify-between items-end h-96">
					{sortedList &&
						sortedList.map((i, key) => {
							return (
								<li key={key} className="flex flex-col mx-1 items-center">
									<div
										style={{ height: `${i * 3}px` }}
										className="border-2 border-white bg-gray-800 w-4"
									></div>
									<div className="text-center">{i}</div>
									<div className="text-center">-</div>
								</li>
							);
						})}
				</ul>
			</div>
			<div className="w-full border-2 border-gray-800 h-full">
				<p className="h-20">Original List</p>
				<ul className="flex justify-between items-end h-96">
					{list.map((i, key) => {
						const barStyle = getBarStyle(key, i, target, index);
						const caption = getCaption(key, i, target, index);

						return (
							<li key={key} className="flex flex-col mx-1 items-center">
								<div
									style={{ height: `${i * 3}px` }}
									className={"w-4 " + barStyle}
								></div>
								<div className="text-center">{i}</div>
								<div className="text-center">{caption}</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Insertion;
