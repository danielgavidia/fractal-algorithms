import React from "react";
import { NodeLinearSearch } from "../../../../types/typesSearch";

// Main
interface LinearProps {
	data: NodeLinearSearch[];
}

const Linear = ({ data }: LinearProps) => {
	return (
		<div className="text-green-400">
			{data.map((node, key) => {
				return <LinearAnimation key={key} node={node} />;
			})}
		</div>
	);
};

// Animation
interface LinearAnimationProps {
	node: NodeLinearSearch;
}

const LinearAnimation = ({ node }: LinearAnimationProps) => {
	const { list, target, index } = node;
	const getBarStyle = (item: number, key: number, index: number, target: number): string => {
		if (key === index && item === target) {
			return "border-2 border-green-900 bg-white";
		} else if (key === index) {
			return "border-2 border-red-900";
		} else if (item === target) {
			return "border-2 border-green-900";
		} else {
			return "border-2 border-white";
		}
	};
	// const generalBackground = success ? "bg-white" : "";

	return (
		<div>
			<ul className={"flex justify-between items-end"}>
				{list.map((i, key) => {
					const barStyle = getBarStyle(i, key, index, target);
					return (
						<li
							key={key}
							className={`flex-1 mx-1 ${barStyle}`}
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
