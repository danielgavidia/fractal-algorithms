import React from "react";
import { NodeSelectionSort } from "../../../../types/typesSort";

// Main
interface SelectionProps {
	data: NodeSelectionSort[];
}
const Selection = ({ data }: SelectionProps) => {
	return <div>Selection</div>;
};

export default Selection;

// Animation
interface SelectionAnimationProps {
	node: NodeSelectionSort;
}
const SelectionAnimation = ({ node }: SelectionAnimationProps) => {
	return <div></div>;
};
