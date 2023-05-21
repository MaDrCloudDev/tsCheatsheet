// Union Types

// union with or |
function logStatusCode(code: string | number) {
	console.log(`Status code: ${code}.`);
}
logStatusCode(404);
logStatusCode('404');

// union type errors
function logStatusCode2(code: string | number) {
	console.log(`Status code: ${code.toUpperCase()}.`);
	// error: Property 'toUpperCase' does not exist on type 'string | number'.
}
