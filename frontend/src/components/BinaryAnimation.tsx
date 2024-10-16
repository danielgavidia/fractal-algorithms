import { NodeBinarySearch } from "../../../types/typesSearch";

interface BinearAnimationProps {
	node: NodeBinarySearch;
}

const getBorder = (
	item: number,
	key: number,
	target: number,
	L: number,
	R: number,
	m: number
): string => {
	if (key === m) {
		return "border-2 border-blue-900";
	} else if (key === L || key === R) {
		return "border-2 border-red-900";
	} else if (item === target) {
		return "border-2 border-green-900";
	} else {
		return "";
	}
};

const BinearAnimation = ({ node }: BinearAnimationProps) => {
	const { list, target, L, R, m, success } = node;

	const generalBackground = success ? "bg-white" : "";

	return (
		<div>
			<ul className={"flex justify-between " + generalBackground}>
				{list.map((i, key) => {
					const border = getBorder(i, key, target, L, R, m);
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

export default BinearAnimation;
