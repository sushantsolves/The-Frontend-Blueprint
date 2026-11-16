// ============================================================
// 3. COMPARISON / RELATIONAL OPERATORS
// ============================================================

// Definition:
// Used to compare two values and return a Boolean result:
// true or false.

// ==   Equal to (compares after type conversion)
// ===  Strict equal to (compares value and type)
// !=   Not equal to (may perform type conversion)
// !==  Strict not equal to (compares value and type)
// >    Greater than
// <    Less than
// >=   Greater than or equal to
// <=   Less than or equal to

console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(5 != "6");   // true
console.log(5 !== "5");  // true
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(5 <= 10);    // true

// NOTE: Prefer === and !== to avoid unexpected type conversion.
