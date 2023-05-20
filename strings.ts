function strings(): void {
	// let hello = "Hello"; // imutable, fixed-length

	let growableHello: string = 'Hello';

	// Get length
	console.log('length: ' + growableHello.length);

	growableHello += 'w'; // push method is for single chars or unicode

	growableHello += 'orld'; // push_str method for pushing any length

	// Capacity in bytes
	console.log('capacity: ' + growableHello.length);

	// Is empty
	console.log('isEmpty: ' + (growableHello.length === 0));

	// Contains
	console.log('containsWorld: ' + (growableHello.indexOf('world') !== -1));

	// Replace
	console.log('replace: ' + growableHello.replace('world', 'earth'));

	// Create string with capacity
	let s: string[] = [];
	s.push('a');
	s.push('b');
	console.log(s.join(''));

	// Assertion testing
	console.assert(s.length === 2); // nothing happens because it passes
	console.assert(s.length === 10);

	// Loop through string by whitespace
	for (const word of growableHello.split(' ')) {
		process.stdout.write(word);
	}
}

strings();
