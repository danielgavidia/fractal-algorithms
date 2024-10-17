import React from "react";
import { MergeSortProps } from "../../../../types/typesSort";

interface MergeProps {
	node: MergeSortProps;
}

const Merge = ({ node }: MergeProps) => {
	const { list, level, left, right } = node;

	return (
		<div className="flex flex-col w-full h-full space-y-2">
			{/* List */}
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

			{/* Left and Right */}
			<div className="flex w-full">
				{/* Left */}
				<div className="w-full border-r-2 border-gray-200 pr-2">
					<p className="h-8 text-xs italic">Left</p>
					<ul className="flex justify-between w-full items-end h-24">
						{left &&
							left.map((i, key) => {
								return (
									<li key={key} className="flex-1 mx-1">
										<div style={{ height: `${i * 0.5}px` }} className="bg-gray-300"></div>
										<div className="text-center text-xs pt-2">{i}</div>
									</li>
								);
							})}
					</ul>
				</div>
				{/* Right */}
				<div className="w-full px-2">
					<p className="h-8 text-xs italic">Right</p>
					<ul className="flex justify-between w-full items-end h-24">
						{right &&
							right.map((i, key) => {
								return (
									<li key={key} className="flex-1 mx-1">
										<div style={{ height: `${i * 0.5}px` }} className="bg-gray-600"></div>
										<div className="text-center text-xs pt-2">{i}</div>
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
