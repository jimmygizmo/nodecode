#! /usr/bin/env node

// Arrow func variations and gotchas:
// https://eloquentcode.com/variations-and-gotchas-of-the-arrow-function-syntax-in-javascript


"use strict";

// This is fine:
const f1 = x => x + 1;

// But if you need more than one statement, then you need braces:

const f2 = x => {
    const thingy = 4;
    const result = x + thingy;
    return result;
};


// This DOES NOT RETURN. BRACKETS REQUIRE A RETURN STATEMENT. Console.log shows it as "undefined", but I don't
// know that it is correct to say it returns undefined.
const f3 = x => {
    const thingy = 4;
    x + thingy;
};


console.log(f1(5));  // 6
console.log(f2(5));  // 9
console.log(f3(5));  // undefined


// IMPORTANT: If braces are used with an arrow function, a return statement is required.

// f4 is like f3 but with a return:
const f4 = x => {
    const doodad = 2;
    const result = x + doodad;
    return result;
};
console.log(f4(5));  // 7

// COROLLARY: Single statement arrow functions will return without the return statement and don't need braces either.


// slight variant, we don't need a const. Returns the statement after the "return" keyword and no parens either.
const f5 = x => {
    const thingmabob = 20;
    return x + thingmabob;
};
console.log(f5(5));  // 25


// return() uses parentheses in this case, multiline, but it can be one line. whitespace generally ignored here.
const f6 = x => {
    const thingmabobish = 400;
    return(
        x + thingmabobish
    );
    // return( x + thingmabobish );  // This works too of course, but sometimes the above syle is much more readable.
};
console.log(f6(5));  // 405


// multiple arguments require parentheses. for clarity, they are sometimes good to use for single arguments as well.
const f7 = ( x, multiplier ) => {
    const many = x * multiplier;
    const doublegood = 2; 
    return(
        many + doublegood
    );
};
console.log(f7(2, 9));  // 20


// A function with no arguments also must use parentheses in the arguments position. (empty parentheses)
const f8 = () => 8;  // Simply returns 8. Takes no arguments.

console.log(f8());  // 8
