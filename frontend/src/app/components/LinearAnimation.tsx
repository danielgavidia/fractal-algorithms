import type { NodeLinearSearch } from "../../../../types/typesSearch";

interface LinearAnimationProps {
	node: NodeLinearSearch;
}

const LinearAnimation = ({ node }: LinearAnimationProps) => {
	const { list, target, index, success } = node;
	const getBorder = (item: number, key: number, index: number, target: number): string => {
		if (key === index) {
			return "border-2 border-red-900";
		} else if (item === target) {
			return "border-2 border-green-900";
		} else {
			return "";
		}
	};
	const generalBackground = success ? "bg-white" : "";

	return (
		<div>
			<ul className={"flex justify-between " + generalBackground}>
				{list.map((i, key) => {
					const border = getBorder(i, key, index, target);
					return (
						<li key={key} className={border}>
							{i}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default LinearAnimation;
