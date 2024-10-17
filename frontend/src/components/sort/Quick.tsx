import React from "react";
import { QuickSortProps } from "../../../../types/typesSort";

interface QuickProps {
	node: QuickSortProps;
}

const Quick = ({ node }: QuickProps) => {
	const { list, level, prePivot, pivot, postPivot } = node;

	return (
		<div className="w-full h-full flex flex-col">
			<div className="w-full border-b-2 border-gray-200 mb-2 pb-2">
				<p className="h-12 text-xs italic">List, Level: {level}</p>
				<ul className="flex justify-between w-full items-end h-40">
					{list.map((i, key) => {
						return (
							<li key={key} className="flex-1 mx-1">
								<div style={{ height: `${i * 1}px` }} className="bg-black"></div>
								<div className="text-center text-sm">{i}</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="w-full">
				<p className="h-12 text-xs italic">Sorted List: Pre-Pivot + Pivot + Post-Pivot</p>

				{/* Pre-pivot */}
				<ul className="flex justify-between w-full items-end h-40">
					{prePivot &&
						prePivot.map((i, key) => {
							return (
								<li key={key} className="flex-1 mx-1">
									<div style={{ height: `${i * 1}px` }} className="bg-gray-300"></div>
									<div className="text-center text-sm">{i}</div>
									<p className="text-center text-sm">-</p>
								</li>
							);
						})}

					{/* Pivot */}
					<li className="flex-1 mx-1">
						<div style={{ height: `${pivot && pivot * 1}px` }} className="bg-red-500"></div>
						<div className="text-center text-sm">{pivot}</div>
						<p className="text-center text-sm">pivot</p>
					</li>

					{/* Post-Pivot */}
					{postPivot &&
						postPivot.map((i, key) => {
							return (
								<li key={key} className="flex-1 mx-1">
									<div style={{ height: `${i * 1}px` }} className="bg-gray-500"></div>
									<div className="text-center text-sm">{i}</div>
									<p className="text-center text-sm">+</p>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default Quick;
