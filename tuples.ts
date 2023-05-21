// Tuples: Typed Arrays

// define tuple
let aTuple: [number, boolean, string];

// initialize correctly
aTuple = [3, true, 'Hello World!'];

// initialize incorrectly; throws an error
// aTuple = [true, 'Hello Wold!', 3];

// Readonly Tuple
// We have no type safety in our tuple for indexes 3+
aTuple.push('added after initialization');
console.log(aTuple);

// define readonly tuple
const aReadonlyTuple: readonly [number, boolean, string] = [
	3,
	true,
	'Hello World!',
];
// throws error as it is readonly.
aReadonlyTuple.push('added after initialization');

// Named Tuples
const graph: [x: number, y: number] = [51.0, 49.0];

// Destructuring Tuples
const graph2: [number, number] = [51.0, 49.0];
const [x, y] = graph;
