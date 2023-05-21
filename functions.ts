// Functions

// return type
//`: number` specifies this function returns a number
function getTime(): number {
	return new Date().getTime();
}

// return void type; doesn't return any value
function printString(): void {
	console.log('Hello World!');
}

// parameters
function add(a: number, b: number) {
	return a + b;
}

// optional parameters
// the `?` marks parameter `z` as optional
function multiply(x: number, y: number, z?: number) {
	return x + y + (z || 0);
}

// default parameters; type can also be inferred
function pow(value: number, exponent: number = 4) {
	return value ** exponent;
}

// named parameters
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
	return dividend / divisor;
}

// rest parameters
function subtract(x: number, y: number, ...rest: number[]) {
	console.log(x - y - rest.reduce((a, b) => a - b, 0));
}

subtract(1, 2, 3, 4, 5);

// type alias
type Aliased = (value: number) => number;

// For this function, parameter `value` is automatically assigned type `number` from type `Aliased`
const aliasFunction: Aliased = (value) => value * -1;
