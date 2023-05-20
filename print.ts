function print(): void {
	// Print to console
	console.log('Hello from the print.ts file');

	// Basic formatting
	console.log(`${'Matt'} is from ${'Arizona'}`);

	// Positional arguments
	console.log(
		`${'Matt'} is from ${'Arizona'} and ${'Matt'} likes to ${'code'}`
	);

	// Named arguments
	console.log(
		`${{ name: 'Matt', activity: 'baseball' }} likes to play ${'baseball'}`
	);

	// Placeholder traits
	console.log(
		`Binary: ${(10).toString(2)} Hex: ${(10).toString(
			16
		)} Octal: ${(10).toString(8)}`
	);

	// Placeholder for debug trait (tuple)
	console.log(JSON.stringify([12, true, 'Hello']));

	// Basic math
	console.log(`10 + 10 = ${10 + 10}`);
}

print();
