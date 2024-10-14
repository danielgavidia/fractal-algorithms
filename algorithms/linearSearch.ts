type LinearSearchProps = {
	list: any[];
	target: any;
	index: number;
};

const list = [1, "potato", { key: "value" }, undefined, 6, 3, "tomato", 10];
const target = "tomato";
const index: number = 0;

const linearSearch = ({ list, target, index }: LinearSearchProps) => {
	if (list[index] === target) {
		return `The target ${JSON.stringify(target)} is found at the following index: ${index}`;
	}
	console.log(
		`We are at index: ${index}. List item at this index: ${JSON.stringify(list[index])}`
	);
	return linearSearch({ list: list, target: target, index: index + 1 });
};

console.log(linearSearch({ list, target, index }));
