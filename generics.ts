// Generics

// Generics enable the creation of "type variables" that facilitate the development of classes, functions, and type aliases without the requirement of explicitly specifying the types utilized by them.

// functions
function createPair<S, T>(varStr: S, varNum: T): [S, T] {
	return [varStr, varNum];
}
console.log(
	createPair<string, number>('This is your string, your num is:', 42)
); // [ 'This is your string, your num is:', 42 ]

// classes
class NamedValue<T> {
	private _value: T | undefined;

	constructor(private name: string) {}

	public setValue(value: T) {
		this._value = value;
	}

	public getValue(): T | undefined {
		return this._value;
	}

	public toString(): string {
		return `${this.name}: ${this._value}`;
	}
}

let value = new NamedValue<number>('withNumber');
value.setValue(11);
console.log(value.toString()); // withNumber: 11

// type aliases
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 11 };
// orks with interfaces with syntax: `interface Wrapped<T> {`

// default value
class NamedValue2<T = string> {
	private _value: T | undefined;

	constructor(private name: string) {}

	public setValue(value: T) {
		this._value = value;
	}

	public getValue(): T | undefined {
		return this._value;
	}

	public toString(): string {
		return `${this.name}: ${this._value}`;
	}
}

let value2 = new NamedValue2('myNumber');
value2.setValue('myValue');
console.log(value2.toString()); // myNumber: myValue

// extends
function createLoggedPair<S extends string | number, T extends string | number>(
	v1: S,
	v2: T
): [S, T] {
	console.log(`creating pair: v1='${v1}', v2='${v2}'`);
	return [v1, v2];
}
createLoggedPair('a', 1); // creating pair: v1='a', v2='1'
