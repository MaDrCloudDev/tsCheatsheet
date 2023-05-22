// Utility Types

// partial - makes all properties in an object optional
interface Coords {
	x: number;
	y: number;
}

let coordsPart: Partial<Coords> = {}; // `Partial` allows x and y to be optional
coordsPart.x = 10;

// required - makes all properties in an object required
interface Vehicle {
	make: string;
	model: string;
	mileage?: number;
}

let myCar: Required<Vehicle> = {
	make: 'Honda',
	model: 'Civic',
	mileage: 30000, // `Required` forces mileage to be defined
};

// record - creates an object type whose property keys are Keys and whose property values are Type
const ageNameMap: Record<string, number> = {
	Matt: 20,
	Michael: 24,
};
//`Record<string, number>` is equivalent to `{ [key: string]: number }`

// omit - constructs a type by picking all properties from Type and then removing Keys
interface Employee {
	name: string;
	age: number;
	location?: string;
}

const matt: Omit<Employee, 'age' | 'location'> = {
	name: 'Matt', // `Omit` has removed age and location from the type and they can't be defined here
};

// pick - constructs a type by picking the set of properties Keys from Type (the opposite of `Omit`)
const Michael: Pick<Employee, 'name'> = {
	name: 'Michael', // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

// exclude - removes types from a union

type Primitive = string | number | boolean;
const value3: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.

// return type - extracts return type from a function type
type CoordGenerator = () => { x: number; y: number };
const coord: ReturnType<CoordGenerator> = {
	x: 10,
	y: 20,
};

// parameters - extracts the parameters of a function type (as an array)
type CoordPrinter = (p: { x: number; y: number }) => void;
const coord2: Parameters<CoordPrinter>[0] = {
	x: 10,
	y: 20,
};
