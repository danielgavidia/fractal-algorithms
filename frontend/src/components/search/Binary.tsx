import React from "react";
import { NodeBinarySearch } from "../../../../types/typesSearch";

// Main
interface LinearProps {
	data: NodeBinarySearch[];
}

// Component
const Binary = ({ data }: LinearProps) => {
	return (
		<div className="text-green-400">
			{data.map((node, key) => {
				return <BinearAnimation key={key} node={node} />;
			})}
		</div>
	);
};

export default Binary;

// Animation
interface BinearAnimationProps {
	node: NodeBinarySearch;
}

const BinearAnimation = ({ node }: BinearAnimationProps) => {
	const { list, target, L, R, m, success } = node;
	const generalBackground = success ? "bg-white" : "";

	function getBorder(
		item: number,
		key: number,
		target: number,
		L: number,
		R: number,
		m: number
	): string {
		if (key === m) {
			return "border-2 border-blue-900";
		} else if (key === L || key === R) {
			return "border-2 border-red-900";
		} else if (item === target) {
			return "border-2 border-green-900";
		} else {
			return "";
		}
	}

	return (
		<ul className={"flex justify-between " + generalBackground}>
			{list.map((i, key) => {
				const border = getBorder(i, key, target, L, R, m);
				return (
					<li key={key} className={border}>
						{i}
					</li>
				);
			})}
		</ul>
	);
};
