import React from "react";
import { NodeLinearSearch } from "../../../../types/typesSearch";

interface LinearProps {
	node: NodeLinearSearch;
}

const Linear = ({ node }: LinearProps) => {
	const { list, target, index } = node;
	const getBarStyle = (item: number, key: number, index: number, target: number): string => {
		if (key === index && item === target) {
			return "bg-white";
		} else if (key === index) {
			return "bg-red-900";
		} else if (item === target) {
			return "bg-green-900";
		} else {
			return "";
		}
	};

	return (
		<div>
			<ul className={"flex justify-between items-end"}>
				{list.map((i, key) => {
					const barStyle = getBarStyle(i, key, index, target);
					return (
						<li
							key={key}
							className={`flex-1 mx-1 border-2 border-white ${barStyle}`}
							style={{ height: `${i * 5}px` }}
						>
							<span className="block text-center">{i}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Linear;
