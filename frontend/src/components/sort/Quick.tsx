import React from "react";
import { QuickSortProps } from "../../../../types/typesSort";

interface QuickProps {
	node: QuickSortProps;
}

const Quick = ({ node }: QuickProps) => {
	const { list, level, prePivot, pivot, postPivot } = node;

	return (
		<div className="w-full border-2 border-white flex flex-col">
			<p>List, level: {level}</p>
			<ul className="flex justify-between w-full items-end">
				{list.map((i, key) => {
					return (
						<li key={key} className="flex-1 mx-1">
							<div
								style={{ height: `${i * 2}px` }}
								className="border-2 border-white bg-gray-500"
							></div>
							<div className="text-center">{i}</div>
						</li>
					);
				})}
			</ul>

			<p>Pre-Pivot + Pivot + Post-Pivot</p>
			<ul className="flex justify-between w-full items-end">
				{prePivot &&
					prePivot.map((i, key) => {
						return (
							<li key={key} className="flex-1 mx-1">
								<div
									style={{ height: `${i * 2}px` }}
									className="border-2 border-white bg-sky-200"
								></div>
								<div className="text-center">{i}</div>
								<p className="text-center">pre</p>
							</li>
						);
					})}
				<li className="flex-1 mx-1">
					<div
						style={{ height: `${pivot && pivot * 2}px` }}
						className="border-2 border-white bg-sky-400"
					></div>
					<div className="text-center">{pivot}</div>
					<p className="text-center">pivot</p>
				</li>
				{postPivot &&
					postPivot.map((i, key) => {
						return (
							<li key={key} className="flex-1 mx-1">
								<div
									style={{ height: `${i * 2}px` }}
									className="border-2 border-white bg-sky-600"
								></div>
								<div className="text-center">{i}</div>
								<p className="text-center">post</p>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Quick;
