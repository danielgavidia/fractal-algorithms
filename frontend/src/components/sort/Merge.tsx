import React from "react";
import { MergeSortProps } from "../../../../types/typesSort";

interface MergeProps {
	node: MergeSortProps;
}

const Merge = ({ node }: MergeProps) => {
	const { list, level, left, right } = node;
	// const generalBackground = success ? "bg-white" : "";
	// const width = Math.floor(1000 / list.length);

	return (
		<div className={"flex flex-col w-full border-2 border-white"}>
			<div>
				<p>Level: {level}</p>
			</div>
			<p>List</p>

			<ul className="flex justify-between w-full items-end min-h-[250px]">
				{list.map((i, key) => {
					return (
						<li
							key={key}
							// style={{ width: `${width}px` }}
							className="flex-1 mx-1 border-2 border-white"
						>
							<div style={{ height: `${i * 2}px` }}></div>
							<div className="text-center">{i}</div>
						</li>
					);
				})}
			</ul>
			<div className="flex w-full">
				<div className="w-full">
					<p>Left</p>
					<ul className="flex justify-between w-full items-end min-h-[250px]">
						{left &&
							left.map((i, key) => {
								return (
									<li
										key={key}
										// style={{ width: `${width}px` }}
										className="flex-1 mx-1 border-2 border-white"
									>
										<div style={{ height: `${i * 2}px` }}></div>
										<div className="text-center">{i}</div>
									</li>
								);
							})}
					</ul>
				</div>
				<div className="w-full">
					<p>Right</p>
					<ul className="flex justify-between w-full items-end min-h-[250px]">
						{right &&
							right.map((i, key) => {
								return (
									<li
										key={key}
										// style={{ width: `${width}px` }}
										className="flex-1 mx-1 border-2 border-white"
									>
										<div style={{ height: `${i * 2}px` }}></div>
										<div className="text-center">{i}</div>
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
