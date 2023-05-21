// Explicit
let firstName: string = 'Matt';

// Implicit
let firstName = 'Matt';

// Any
let x = true;
x = 'string'; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(x); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

let y: any = true;
y = 'string'; // no error; can be "any" type
Math.round(y); // no error; can be "any" type

// Unknown
let z: unknown = 1;
z = 'string'; // no error
z = {
	runANonExistentMethod: () => {
		console.log('I am running a non existent method');
	},
} as { runANonExistentMethod: () => void };
// In the absence of type information, what measures can we take to prevent the occurrence of the error in the code snippet that has been commented out?
// z.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof z === 'object' && z !== null) {
	(z as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// We cast multiple times, we can check in the if() if our type is secure and have a safer casting

// Never
let a: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

// null & undefined
let b: undefined = undefined;
let c: null = null;
