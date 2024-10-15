interface Graph {
	[key: number]: number[];
}

const exampleGraph: Graph = {
	1: [2, 7, 8],
	2: [3, 6],
	3: [4, 5],
	8: [9, 12],
	9: [10, 11],
};

interface DepthFirstSearchProps {
	graph: Graph;
	target: number;
	startNode: number;
}

const depthFirstSearch = ({ graph, target, startNode }: DepthFirstSearchProps) => {
	let visited: Set<number> = new Set();
	let stack: number[] = [startNode];

	while (stack.length > 0) {
		const currentNode = stack.pop()!;
		if (currentNode === target) {
			return true;
		}

		if (!visited.has(currentNode)) {
			visited.add(currentNode);

			const neighbors = graph[currentNode] || [];
			for (const neighbor of neighbors) {
				if (!visited.has(neighbor)) {
					stack.push(neighbor);
				}
			}
		}
	}
	return false;
};

console.log(depthFirstSearch({ graph: exampleGraph, target: 11, startNode: 1 }));
