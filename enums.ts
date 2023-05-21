// Enums

// numeric enums; default
enum Compass {
	North,
	East,
	South,
	West,
}
let currentDirection = Compass.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = 'North'; // Error: "North" is not assignable to type 'Compass'.

// numeric enums done right, initialized
enum Compass2 {
	North = 1,
	East,
	South,
	West,
}
// logs 1
console.log(Compass2.North);
// logs 3
console.log(Compass2.South);

// initialized numeric enums fully set up
enum LeetCodes {
	E = 3,
	T = 7,
	S = 5,
	A = 4,
}
// logs 3
console.log(LeetCodes.E);
// logs 4
console.log(LeetCodes.A);

// string enums
enum Compass3 {
	North = 'North',
	East = 'East',
	South = 'South',
	West = 'West',
}
// logs "North"
console.log(Compass3.North);
// logs "South"
console.log(Compass3.South);
