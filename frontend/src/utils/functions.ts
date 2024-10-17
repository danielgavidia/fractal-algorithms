// Generate random array
export function generateRandomArray(): number[] {
	const randomArray: number[] = [];
	for (let i = 0; i < 12; i++) {
		const randomNumber = Math.ceil(Math.random() * 99); // Random number between 0 and 100
		randomArray.push(randomNumber);
	}
	return randomArray;
}
