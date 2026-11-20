// ============================================================
// 8. TYPE OPERATORS
// ============================================================

// Definition:
// Used to determine or work with the type of a value or object.

// typeof:
// Returns a string describing the type of a value.

console.log(typeof 100);       // "number"
console.log(typeof "Hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"

// NOTE: typeof null returns "object" because of a historical
// JavaScript quirk.


// instanceof:
// Checks whether an object's prototype chain contains the
// prototype of a specified constructor.

console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
