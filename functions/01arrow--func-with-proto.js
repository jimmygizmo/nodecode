#! /usr/bin/env node

// Traversy Media:
// https://www.youtube.com/watch?v=u4URamXstM0

"use strict";

function Prefixer ( prefix ) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function ( arr ) {
    let thishack = this;  // This is a traditional hack.
    return arr.map(
        function ( x ) {
            // Don't try to access "this" like we did above.
            // console.log( this.prefix + x );  // Cannot do this. Looks like "this" is undefined here.
            // "Cannot read property prefix of undefined."
            // BUT if you use the above hack of just copying "this" into a new variable, it works!
            console.log( thishack.prefix + x );
        }
    );
};

let hello_prefixer = new Prefixer('Hello ');

hello_prefixer.prefixArray(
    ["Patrick", "Taylor", "Irynya", "Oleg"]
    );

