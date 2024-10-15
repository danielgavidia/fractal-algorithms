// Setup
import express from "express";

const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

// Routes
// Linear search
import { linearSearch } from "../algorithms/search/linearSearch";

app.post("/algos/search/linear", (req, res) => {
	const node = req.body;
	console.log(node);
	const algoOutput = linearSearch(node);
	res.status(200).json(algoOutput);
});

// Binary search
import { binarySearch } from "../algorithms/search/binarySearch";

app.post("/algos/search/binary", (req, res) => {
	const node = req.body;
	console.log(node);
	const algoOutput = binarySearch(node);
	res.status(200).json(algoOutput);
});

// Bubble sort
import { bubbleSort } from "../algorithms/sort/bubbleSort";

app.post("/algos/sort/bubble", (req, res) => {
	const node = req.body;
	console.log(node);
	const algoOutput = bubbleSort(node);
	res.status(200).json(algoOutput);
});

// Selection sort
import { selectionSort } from "../algorithms/sort/selectionSort";

app.post("/algos/sort/selection", (req, res) => {
	const node = req.body;
	console.log(node);
	const algoOutput = selectionSort(node);
	res.status(200).json(algoOutput);
});
