import React from "react";
import BinearAnimation from "./BinaryAnimation";
import { NodeBinarySearch } from "../../../types/typesSearch";

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
