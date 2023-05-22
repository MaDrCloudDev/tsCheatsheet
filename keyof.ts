// Keyof

// `keyof` is a keyword in TypeScript used to extract the key type from an object type.

// when used on an object type with explicit keys, `keyof` creates a union type with them

interface Employee {
	name: string;
	age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printEmployeeProperty(employee: Employee, property: keyof Employee) {
	console.log(
		`Printing employee property ${property}: "${employee[property]}"`
	);
}
let employee = {
	name: 'Matt',
	age: 30,
};
printEmployeeProperty(employee, 'name'); // Printing employee property name: "Matt"

// with index signatures - `keyof` can also be used with index signatures to extract the index type.
type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
	return { [property]: value };
}
