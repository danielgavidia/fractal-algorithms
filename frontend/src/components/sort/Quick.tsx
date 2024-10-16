import React from "react";
import { QuickSortProps } from "../../../../types/typesSort";

interface QuickProps {
	node: QuickSortProps;
}

const Quick = ({ node }: QuickProps) => {
	// const { list, level, prePivot, pivot, postPivot, sorted } = node;
	const { list, level, sorted } = node;

	return (
		<div className={"w-full border-2 border-white"}>
			<p>Original List, level: {level}</p>
			<ul className="flex justify-between w-full">
				{list.map((i, key) => {
					return (
						<li key={key} className="border-2 border-white">
							{i}
						</li>
					);
				})}
			</ul>
			<p>Sorted List</p>

			<ul className="flex justify-between w-full">
				{sorted &&
					sorted.map((i, key) => {
						return (
							<li key={key} className="border-2 border-green">
								{i}
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Quick;
