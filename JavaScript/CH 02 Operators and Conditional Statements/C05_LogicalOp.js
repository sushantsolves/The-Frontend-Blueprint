// ============================================================
// 4. LOGICAL OPERATORS
// ============================================================

// Definition:
// Used to combine or reverse Boolean conditions.

// &&  Logical AND: true if both operands are truthy
// ||  Logical OR: true if at least one operand is truthy
// !   Logical NOT: reverses the truthiness of a value

let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); // true
console.log(age < 18 || hasID);  // true
console.log(!hasID);             // false

// NOTE: && and || can return operand values, not just Booleans.
// They use short-circuit evaluation (may skip the second operand).
