import React from "react";
import { MergeSortProps } from "../../../../types/typesSort";

interface MergeProps {
	node: MergeSortProps;
}

const Merge = ({ node }: MergeProps) => {
	const { list, level, left, right } = node;
	// const generalBackground = success ? "bg-white" : "";

	return (
		<div className={"flex w-full border-2 border-white"}>
			<div>
				<p>Level: {level}</p>
			</div>
			<p>List</p>

			<ul className="flex justify-between w-full">
				{list.map((i, key) => {
					return (
						<li key={key} className="border-2 border-white">
							{i}
						</li>
					);
				})}
			</ul>
			<p>Left</p>

			<ul className="flex justify-between w-full">
				{left &&
					left.map((i, key) => {
						return (
							<li key={key} className="border-2 border-green">
								{i}
							</li>
						);
					})}
			</ul>
			<p>Right</p>
			<ul className="flex justify-between w-full">
				{right &&
					right.map((i, key) => {
						return (
							<li key={key} className="border-2 border-red">
								{i}
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Merge;
