













// ============================================================
// 9. NULLISH COALESCING OPERATOR (??)
// ============================================================

// Definition:
// Returns the right-hand operand only when the left-hand operand
// is null or undefined.

let username = null;

console.log(username ?? "Guest"); // "Guest"

console.log(0 ?? 100);        // 0
console.log("" ?? "Default"); // ""

// NOTE: Unlike ||, ?? does not replace 0, false, or "".


// ============================================================
// 10. OPTIONAL CHAINING OPERATOR (?.)
// ============================================================

// Definition:
// Safely accesses a property or method when the value before ?.
// is null or undefined. It returns undefined instead of throwing
// a TypeError in those cases.

let user = {
    profile: {
        name: "Sushant"
    }
};

console.log(user.profile?.name); // "Sushant"

let person = null;
console.log(person?.name); // undefined


// ============================================================
// 11. COMMA OPERATOR (,)
// ============================================================

// Definition:
// Evaluates multiple expressions from left to right and returns
// the value of the last expression.

let number = (1, 2, 3);

console.log(number); // 3


// ============================================================
// 12. DELETE OPERATOR
// ============================================================

// Definition:
// Removes a configurable property from an object.
// Returns true when deletion succeeds (or the property is absent).

let student = {
    name: "Sushant",
    age: 20
};

delete student.age;

console.log(student); // { name: "Sushant" }


// ============================================================
// 13. IN OPERATOR
// ============================================================

// Definition:
// Checks whether a property exists in an object or anywhere
// in its prototype chain.

let car = {
    brand: "Toyota",
    year: 2025
};

console.log("brand" in car); // true
console.log("color" in car); // false


// ============================================================
// 14. NEW OPERATOR
// ============================================================

// Definition:
// Creates an instance of a constructor function or class.

class Student {
    constructor(name) {
        this.name = name;
    }
}

let s1 = new Student("Sushant");

console.log(s1.name); // Sushant


// ============================================================
// 15. SPREAD OPERATOR (...)
// ============================================================

// Definition:
// Expands iterable values or object properties into individual
// elements or properties, depending on the context.

let nums = [1, 2, 3];
let copiedNums = [...nums];

console.log(copiedNums); // [1, 2, 3]

let original = { name: "Sushant" };
let copiedObject = { ...original };

console.log(copiedObject); // { name: "Sushant" }


// ============================================================
// 16. REST OPERATOR (...)
// ============================================================

// Definition:
// Collects multiple remaining arguments or elements into an array.
// In object destructuring, it collects remaining properties.

function addAll(...numbers) {
    return numbers.reduce((sum, n) => sum + n, 0);
}

console.log(addAll(10, 20, 30)); // 60

// NOTE: Spread and rest use the same ... syntax.
// Their purpose depends on where they are used.


// ============================================================
// 17. DESTRUCTURING ASSIGNMENT
// ============================================================

// Definition:
// Extracts values from arrays or properties from objects into
// variables using a compact syntax.

let colors = ["red", "blue"];
let [first, second] = colors;

console.log(first);  // "red"
console.log(second); // "blue"

let employee = { name: "Sushant", salary: 50000 };
let { name, salary } = employee;

console.log(name);   // "Sushant"
console.log(salary); // 50000


// ============================================================
// 18. AWAIT OPERATOR
// ============================================================

// Definition:
// Pauses execution within an async function until a Promise settles,
// then produces its fulfilled value or throws its rejection reason.

// Example syntax:
// async function getData() {
//     let response = await fetch("https://example.com");
//     return response;
// }

// NOTE: await can also be used at the top level in supported
// JavaScript modules.


// ============================================================
// 19. YIELD OPERATOR
// ============================================================

// Definition:
// Pauses a generator function and produces a value to its caller.

function* generateNumbers() {
    yield 1;
    yield 2;
}

let generator = generateNumbers();

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2


// ============================================================
// 20. VOID OPERATOR
// ============================================================

// Definition:
// Evaluates an expression and returns undefined, regardless
// of the expression's value.

console.log(void 0); // undefined
console.log(void (10 + 20)); // undefined


// ============================================================
// 21. OPTIONAL / CONDITIONAL FUNCTION CALL (?.())
// ============================================================

// Definition:
// Calls a function only if the value before ?.() is null or
// undefined. If it is nullish, the result is undefined.

let greet = undefined;

console.log(greet?.()); // undefined


// ============================================================
// 22. GROUPING OPERATOR ()
// ============================================================

// Definition:
// Parentheses group expressions and control the order of evaluation.

console.log((2 + 3) * 4); // 20
console.log(2 + 3 * 4);   // 14


// ============================================================
// IMPORTANT NOTES
// ============================================================

// 1. An operand is the value on which an operator acts.
// 2. An expression is a combination of values, variables,
//    and operators that produces a value.
// 3. Operator precedence determines which operation is evaluated
//    first when parentheses do not specify the order.
// 4. Associativity determines the evaluation direction when
//    operators have the same precedence.
// 5. Short-circuit evaluation can skip unnecessary operations.
// 6. The + operator can perform addition or string concatenation.
// 7. ++ and -- have prefix (++x) and postfix (x++) forms.
// 8. Spread, rest, and destructuring are language syntax features,
//    rather than conventional standalone operators.
// 9. Assignment and comparison operators should not be confused:
//    = assigns a value; === compares values and types.
// 10. JavaScript also supports async/await, generators, objects,
//     functions, and other language constructs that interact
//     with operators and expressions.
