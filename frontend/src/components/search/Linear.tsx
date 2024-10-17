import React from "react";
import { NodeLinearSearch } from "../../../../types/typesSearch";

interface LinearProps {
	node: NodeLinearSearch;
}

const Linear = ({ node }: LinearProps) => {
	const { list, target, index } = node;
	const getBarStyle = (item: number, key: number, index: number, target: number): string => {
		if (key === index && item === target) {
			return "bg-green-500";
		} else if (key === index) {
			return "bg-black";
		} else if (item === target) {
			return "bg-red-500";
		} else {
			return "";
		}
	};

	return (
		<ul className={"flex justify-between items-end"}>
			{list.map((i, key) => {
				const barStyle = getBarStyle(i, key, index, target);
				return (
					<li key={key} className="flex-1 mx-1 w-10">
						<div
							className={`border-[0.5px] border-black ${barStyle}`}
							style={{ height: `${i * 5}px` }}
						></div>
						<span className="block text-center">{i}</span>
					</li>
				);
			})}
		</ul>
	);
};

export default Linear;
