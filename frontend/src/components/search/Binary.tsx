import React from "react";
import { NodeBinarySearch } from "../../../../types/typesSearch";

interface BinearProps {
	node: NodeBinarySearch;
}

const Binary = ({ node }: BinearProps) => {
	const { list, target, L, R, m } = node;

	function getBarStyle(
		item: number,
		key: number,
		target: number,
		L: number,
		R: number,
		m: number
	): string {
		if (item === target && key === m) {
			return "border-2 border-white bg-white";
		} else if (key === m) {
			return "border-2 border-white bg-blue-900";
		} else if (key === L || key === R) {
			return "border-2 border-white bg-red-900";
		} else if (item === target) {
			return "border-2 border-white bg-green-900";
		} else {
			return "border-2 border-white";
		}
	}

	function getBarTag(
		item: number,
		key: number,
		target: number,
		L: number,
		R: number,
		m: number
	): string {
		if (item === target && key === m) {
			return "Target + m";
		} else if (key === m) {
			return "m";
		} else if (key === L) {
			return "L";
		} else if (key === R) {
			return "R";
		} else if (item === target) {
			return "Target";
		} else {
			return "-";
		}
	}

	return (
		<ul className={"flex justify-between items-end"}>
			{list.map((i, key) => {
				return (
					<li className="flex-1 mx-1">
						<div
							key={key}
							className={getBarStyle(i, key, target, L, R, m)}
							style={{ height: `${i * 5}px` }}
						></div>
						<span className="block text-center">{i}</span>
						<span className="block text-center">
							{getBarTag(i, key, target, L, R, m)}
						</span>
					</li>
				);
			})}
		</ul>
	);
};

export default Binary;
