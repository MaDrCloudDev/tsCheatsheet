function greet(name: string): string {
	return `Hello, ${name}!`;
}

function main() {
	let person = 'John';
	let greeting = greet(person);
	console.log(greeting);
}
