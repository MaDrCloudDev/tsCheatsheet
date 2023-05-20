function run(): void {
	let numbers: number[] = [1, 2, 3, 4, 5];

	// Reassign a value
	numbers[2] = 20;

	console.log(numbers);

	// Get single value
	console.log('Single value: ', numbers[0]);

	// Print array length
	console.log('Array length: ', numbers.length);

	// Get slice
	let slice: number[] = numbers.slice(0, 2);
	console.log('Slice: ', slice);
}

run();
