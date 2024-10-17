import React from "react";
import { NodeLinearSearch } from "../../../../types/typesSearch";

interface LinearProps {
	node: NodeLinearSearch;
}

const Linear = ({ node }: LinearProps) => {
	const { list, target, index } = node;

	function getBarStyle(item: number, key: number, index: number, target: number): string {
		if (key === index && item === target) {
			return "bg-green-500";
		} else if (key === index) {
			return "bg-black";
		} else if (item === target) {
			return "bg-red-500";
		} else {
			return "bg-gray-300";
		}
	}

	function getCaption(item: number, key: number, index: number, target: number): string {
		if (item === target) {
			return "Target";
		} else if (key === index) {
			return "Index";
		} else {
			return ".";
		}
	}

	return (
		<div className="h-full">
			<p className="h-12 text-xs italic">Target: {target}</p>
			<ul className={"flex justify-between items-end h-full"}>
				{list.map((i, key) => {
					const barStyle = getBarStyle(i, key, index, target);
					const caption = getCaption(i, key, index, target);
					return (
						<li key={key} className="flex-1 mx-1 w-10">
							<div className={barStyle} style={{ height: `${i * 2}px` }}></div>
							<span className="block text-center">{i}</span>
							<span className="block text-center text-sm">{caption}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Linear;
