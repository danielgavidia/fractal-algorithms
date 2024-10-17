import React from "react";
import { MergeSortProps } from "../../../../types/typesSort";

interface MergeProps {
	node: MergeSortProps;
}

const Merge = ({ node }: MergeProps) => {
	const { list, level, left, right } = node;

	return (
		<div className="flex flex-col w-full h-full">
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
			<div className="flex w-full">
				<div className="w-full border-r-2 border-gray-200 p-2">
					<p className="h-12 text-xs italic">Left</p>
					<ul className="flex justify-between w-full items-end h-40">
						{left &&
							left.map((i, key) => {
								return (
									<li key={key} className="flex-1 mx-1">
										<div style={{ height: `${i * 1}px` }} className="bg-gray-300"></div>
										<div className="text-center text-sm">{i}</div>
									</li>
								);
							})}
					</ul>
				</div>
				<div className="w-full p-2">
					<p className="h-12 text-xs italic">Right</p>
					<ul className="flex justify-between w-full items-end h-40">
						{right &&
							right.map((i, key) => {
								return (
									<li key={key} className="flex-1 mx-1">
										<div style={{ height: `${i * 1}px` }} className="bg-gray-600"></div>
										<div className="text-center text-sm">{i}</div>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Merge;
