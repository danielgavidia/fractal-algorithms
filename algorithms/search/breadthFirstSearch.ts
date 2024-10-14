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

interface BreadthFirstSearchProps {
	graph: Graph;
	target: number;
	startNode: number;
}

const breadthFirstSearch = ({ graph, target, startNode }: BreadthFirstSearchProps): boolean => {
	let visited: Set<number> = new Set(); // To track visited nodes
	let queue: number[] = [startNode]; // Use a queue to explore level by level

	// While there are nodes to visit in the queue
	while (queue.length > 0) {
		const currentNode = queue.shift()!; // Dequeue the next node (FIFO)

		// If the current node is the target, return true (found)
		if (currentNode === target) {
			console.log(`Found target: ${currentNode}`);
			return true;
		}

		// If not visited, mark it as visited
		if (!visited.has(currentNode)) {
			visited.add(currentNode);
			console.log(`Visited node: ${currentNode}`);

			// Add neighbors to the queue for further exploration
			const neighbors = graph[currentNode] || [];
			for (const neighbor of neighbors) {
				if (!visited.has(neighbor)) {
					queue.push(neighbor); // Enqueue unvisited neighbors
				}
			}
		}
	}

	// If the loop ends and we haven't found the target
	return false;
};

console.log(breadthFirstSearch({ graph: exampleGraph, target: 11, startNode: 1 }));
