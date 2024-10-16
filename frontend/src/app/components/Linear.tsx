import React from "react";
import LinearAnimation from "./LinearAnimation";
import { NodeLinearSearch } from "../../../../types/typesSearch";

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

export default Linear;
