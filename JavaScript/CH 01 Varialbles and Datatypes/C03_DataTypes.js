/*
====================================================================
                                DATA TYPES
====================================================================

=============================
PRIMITIVE DATATYPE
=============================
-> There are total 7 types.
        1. Number       --> all the numbers, points, negatives.
        2. String       --> under "" or ''
        3. Boolean      --> true or false
        4. undefined    --> just declare a variable using let.
        5. null         --> let x = null; -> absense of a obj
        6. BigInt       --> let x = BigInt("123");  --> 123n -> carry a n in the end.
        7. Symbol       --> let y = Symbol("Hello");



=============================
NON-PRIMITIVE DATATYPE
=============================
        1. Objects      --> collection of values, and generally store in key value pair.
*/


//! Note: we can check any variables dt by 'typeof <varName>'.




const Student = {
    fullName : "Sushant Raj",
    age : 19,
    cgpa : 8.67,
    isPass : true,

}


/* To access the key value pair:
    1. obj.key
    2. obj[key]
*/

console.log(Student.fullName);
console.log(Student[cgpa]);

console.log(typeof Student);
console.log(typeof Student["fullname"]);