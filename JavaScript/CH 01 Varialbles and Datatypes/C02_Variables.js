/*
==========================================================
                        VARIABLES
==========================================================
-> Type of a container to store different types of data



*/


fullname = "Tony Stark";
age = 24;
price = 99.99;
isFollow = true;
x = null;       //-> know what's inside, its empty
y = undefined;  //--> don't know whats inside

console.log(fullname);
console.log(age);
console.log(price);
console.log(isFollow);
console.log(x);
console.log(y);


/*
! Note: JS is a dynamically typed language.(js interpreter calculates the stored data type during runtime. )
*/




/*
!NAME CONVENTION FOR VARIABLE:
-> Case sensitive 
-> only letter, digit, underscore(_), and dollar($) is allowed. (not even space)
-> Only a letter, underscore or $ should be first character.
-> Reserved words can't be used.
*/



/*
!Cases to used:
CamelCase: fullName -> first letter small other capital
Pascal: FullName -> all words first letter is capital.
*/




/*
=======================================================================
                    KEYWORDS TO USE BEFORE VARIABLE
=======================================================================

!var -> variable can be re-declared & updated. A global scope variable.
        --> used mostly before ES6(EcmaScript 6(Modern JS)) which comes in 2015, and introduced let and const.

!let -> variable cannot be re-declared but can be updated. A block scope variable. (Block -> means inside a { }, which is called block.)

!const -> variable cannot be re-declared or updated. A block scope variable.

*/




//! Note: every variable which is just only declared, stores undefined in it.
//      -> ex: let a; -> console.log(a);