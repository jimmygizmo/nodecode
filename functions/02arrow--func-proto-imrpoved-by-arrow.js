#! /usr/bin/env node

// Traversy Media:
// https://www.youtube.com/watch?v=u4URamXstM0

"use strict";

function Prefixer ( prefix ) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function ( arr ) {
    // let thishack = this;  // This is a traditional hack. - BUT, Not needed when we change to arrow function below.
    return arr.map(
        ( x ) => {
            // Made this into an arrow function. It is still anonymous, but before it used a "function" declaration.
            // It seems as though the "function" keyword re-defines "this" into the function context, but
            // with an arrow function, perhaps "this" is un-touched. CONFIRM!
            // Traversy is saying "the use of the arrow function here allows us to USE A LEXICAL THIS."
            // "Lexical" means "as it is written"
            console.log( this.prefix + x );
        }
    );
};

let hello_prefixer = new Prefixer('Hello ');

hello_prefixer.prefixArray(
    ["Patrick", "Taylor", "Irynya", "Oleg"]
    );

