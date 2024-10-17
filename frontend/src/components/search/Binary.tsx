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
			return "bg-green-500";
		} else if (item === target) {
			return "bg-red-500";
		} else if (key === m) {
			return "bg-blue-500";
		} else if (key === L) {
			return "bg-black";
		} else if (key === R) {
			return "bg-black";
		} else {
			return "bg-gray-300";
		}
	}

	function getCaption(
		item: number,
		key: number,
		target: number,
		L: number,
		R: number,
		m: number
	): string {
		if (item === target) {
			return "Target";
		} else if (key === m) {
			return "m";
		} else if (key === L) {
			return "L";
		} else if (key === R) {
			return "R";
		} else {
			return ".";
		}
	}

	return (
		<div className="h-full">
			<p className="h-12 text-xs italic">Target: {target}</p>
			<ul className={"flex justify-between items-end h-full"}>
				{list.map((i, key) => {
					const barStyle = getBarStyle(i, key, target, L, R, m);
					const caption = getCaption(i, key, target, L, R, m);
					return (
						<li className="flex-1 mx-1 w-10">
							<div key={key} className={barStyle} style={{ height: `${i * 2}px` }}></div>
							<span className="block text-center">{i}</span>
							<span className="block text-center text-sm">{caption}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Binary;
