// Arrays

const names: string[] = [];
names.push('Matt'); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Readonly
const names: readonly string[] = ['Matt'];
names.push('Michael'); // Error: Property 'push' does not exist on type 'readonly string[]'.

// Type inference
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
numbers.push('4'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error
