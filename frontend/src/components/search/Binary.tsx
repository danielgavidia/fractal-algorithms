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
			return "border-[0.5px] border-black bg-green-500";
		} else if (item === target) {
			return "border-[0.5px] border-black bg-red-500";
		} else if (key === m) {
			return "border-[0.5px] bg-blue-500";
		} else if (key === L) {
			return "border-[0.5px] border-black bg-black";
		} else if (key === R) {
			return "border-[0.5px] border-black bg-black";
		} else {
			return "border-[0.5px] border-black";
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
			return "-";
		}
	}

	return (
		<ul className={"flex justify-between items-end h-full"}>
			{list.map((i, key) => {
				const barStyle = getBarStyle(i, key, target, L, R, m);
				const caption = getCaption(i, key, target, L, R, m);
				return (
					<li className="flex-1 mx-1 w-10">
						<div key={key} className={barStyle} style={{ height: `${i * 3}px` }}></div>
						<span className="block text-center">{i}</span>
						<span className="block text-center text-xs">{caption}</span>
					</li>
				);
			})}
		</ul>
	);
};

export default Binary;
