import React from "react";
import { QuickSortProps } from "../../../../types/typesSort";

interface QuickProps {
	node: QuickSortProps;
}

const Quick = ({ node }: QuickProps) => {
	const { list, level, prePivot, pivot, postPivot } = node;

	return (
		<div className="w-full h-full flex flex-col space-y-2">
			{/* Unsorted list */}
			<div className="w-full">
				<p className="h-8 text-xs italic">List, Level: {level}</p>
				<ul className="flex justify-between w-full items-end h-24">
					{list.map((i, key) => {
						return (
							<li key={key} className="flex-1 mx-1">
								<div style={{ height: `${i * 0.5}px` }} className="bg-black"></div>
								<div className="text-center text-xs pt-2">{i}</div>
							</li>
						);
					})}
				</ul>
			</div>

			{/* Divider */}
			<div className="w-full h-2 border-t-2 py-2 border-gray-200"></div>

			{/* Sorted list */}
			<div className="w-full">
				<p className="h-8 text-xs italic">Sorted List: Pre-Pivot + Pivot + Post-Pivot</p>

				{/* Pre-pivot */}
				<ul className="flex justify-between w-full items-end h-24">
					{prePivot &&
						prePivot.map((i, key) => {
							return (
								<li key={key} className="flex-1 mx-1">
									<div style={{ height: `${i * 0.5}px` }} className="bg-gray-300"></div>
									<div className="text-center text-xs pt-2">{i}</div>
									<p className="text-center text-xs">-</p>
								</li>
							);
						})}

					{/* Pivot */}
					<li className="flex-1 mx-1">
						<div style={{ height: `${pivot && pivot * 0.5}px` }} className="bg-red-500"></div>
						<div className="text-center text-xs pt-2">{pivot}</div>
						<p className="text-center text-xs">pivot</p>
					</li>

					{/* Post-Pivot */}
					{postPivot &&
						postPivot.map((i, key) => {
							return (
								<li key={key} className="flex-1 mx-1">
									<div style={{ height: `${i * 0.5}px` }} className="bg-gray-500"></div>
									<div className="text-center text-xs pt-2">{i}</div>
									<p className="text-center text-xs">+</p>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default Quick;
