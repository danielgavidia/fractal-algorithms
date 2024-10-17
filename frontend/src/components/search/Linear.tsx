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
			return "";
		}
	}

	function getCaption(item: number, key: number, index: number, target: number): string {
		if (item === target) {
			return "Target";
		} else if (key === index) {
			return "Index";
		} else {
			return "-";
		}
	}

	return (
		<ul className={"flex justify-between items-end h-full"}>
			{list.map((i, key) => {
				const barStyle = getBarStyle(i, key, index, target);
				const caption = getCaption(i, key, index, target);
				return (
					<li key={key} className="flex-1 mx-1 w-10">
						<div
							className={`border-[0.5px] border-black ${barStyle}`}
							style={{ height: `${i * 3}px` }}
						></div>
						<span className="block text-center">{i}</span>
						<span className="block text-center text-xs">{caption}</span>
					</li>
				);
			})}
		</ul>
	);
};

export default Linear;
