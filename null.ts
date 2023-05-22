// Null

// types -  null and undefined are primitive types (tsconfig.json must have "strictNullChecks": true)
let value: string | undefined | null = null;
value = 'Hello World!';
value = undefined;

// optional  - optional chaining with ?. allows us to access properties on an object that may be null or undefined
interface Warehouse {
	sqft: number;
	yard?: {
		sqft: number;
	};
}
function printYardSize(warehouse: Warehouse) {
	const yardSize = warehouse.yard?.sqft;
	if (yardSize === undefined) {
		console.log('No yard');
	} else {
		console.log(`Yard is ${yardSize} sqft`);
	}
}

let workspace: Warehouse = {
	sqft: 500,
};

printYardSize(workspace); // Prints 'No yard'

// nullish coalescence - writing expressions that have a fallback value when null or undefined is encountered
function printDistance(distance: number | null | undefined) {
	console.log(`Distance: ${distance ?? 'Unavailable'}`);
}

printDistance(null); // Prints 'Distance: Unavailable'
printDistance(0); // Prints 'Distance: 0'

// null assertions - using ! to tell the compiler to ignore null or undefined
function getValue(): string | undefined {
	return 'Hello World!';
}
let value2 = getValue();
console.log('value2 length: ' + value2!.length);

// array bounds handling -  TypeScript assumes array access never returns null or undefined (unless defined as part of the array type)
let array: number[] = [1, 2, 3];
let value3 = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`
