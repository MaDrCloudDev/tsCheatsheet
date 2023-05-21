// Object types

const car: { maker: string; model: string; year: number } = {
	maker: 'Honda',
	model: 'Civic',
	year: 2008,
};

// infered type
// Type inferred from type used above
car.maker = 'Ford'; // no error
car.maker = 2; // Error: Type 'number' is not assignable to type 'string'.

// without optional properties
const vehicle: { maker: string; mileage: number } = {
	// Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ maker: string; mileage: number; }'.
	maker: 'Honda',
};
vehicle.mileage = 3000;
// with optional properties
const vehicle2: { maker: string; mileage?: number } = {
	// no error
	maker: 'Honda',
};
vehicle2.mileage = 3000;

// index signatures
const ageNameMap: { [index: string]: number } = {};
ageNameMap.Matt = 25; // no error
ageNameMap.Michael = 'Fifty'; // Error: Type 'string' is not assignable to type 'number'.
