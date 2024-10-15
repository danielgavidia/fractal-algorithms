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
import { binarySearch } from "../algorithms/search/binarySearch";

app.post("/algos/search/binary", (req, res) => {
	const { node } = req.body;
	const algoOutput = binarySearch(node);
	res.status(200).send();
});
