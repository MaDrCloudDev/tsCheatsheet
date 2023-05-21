// Casting Types

//
let a: unknown = 'Hello World!';
console.log((a as string).length);

// Casting doesn't really change type, it just tells the compiler to treat it as a different type
let a2: unknown = 3;
console.log((a2 as string).length); // logs undefined because numbers don't have a length

// TypeScript typechecks casts
console.log((3 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

// Casting using <>; doesn't work in TSX
let a3: unknown = 'Hello World!';
console.log((<string>a).length);

// Forced casting
let a4 = 'Hello World!';
console.log((a4 as unknown as number).length); // a is not actually a number so returns undefined
