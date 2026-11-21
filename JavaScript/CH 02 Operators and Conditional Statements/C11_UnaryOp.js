// ==================================================
// UNARY OPERATORS IN JAVASCRIPT
// ==================================================

// Definition:
// Unary operators perform an operation on a single operand.

let x = 10;

// 1. Unary Plus (+)
// Converts a value into a number.
console.log(+"20"); // 20 (number)

// 2. Unary Minus (-)
// Converts a value into a number and negates it.
console.log(-x); // -10

// 3. Increment (++)
// Increases the value by 1.
x++;
console.log(x); // 11

// 4. Decrement (--)
// Decreases the value by 1.
x--;
console.log(x); // 10

// 5. Logical NOT (!)
// Reverses the truthiness of a value.
console.log(!true); // false

// 6. Bitwise NOT (~)
// Inverts the bits of a 32-bit integer.
console.log(~5); // -6

// 7. typeof
// Returns the data type of a value as a string.
console.log(typeof "Hello"); // "string"

// 8. void
// Evaluates an expression and returns undefined.
console.log(void 0); // undefined

// 9. delete
// Removes a configurable property from an object.
let student = { age: 20 };
delete student.age;
console.log(student); // {}

// 10. await (unary-like keyword)
// Waits for a Promise inside an async function.
async function example() {
    let result = await Promise.resolve(100);
    console.log(result); // 100
}