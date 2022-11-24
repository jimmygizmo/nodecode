#! /usr/bin/env node

// NOTE: The plusMinus function does work and this is the correct solution, however, the input
// processing is weird and I could not get it to work as advertized. The plusMinus function
// as it is here does pass all automated tests done by the assessing service.

"use strict";

// https://nodejs.org/api/process.html
// Begin reading from stdin so the process does not exit.
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    console.log( "inputString before split: " + inputString );
    inputString = inputString.split('\n');
    console.log( "inputString after split: " + inputString );

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */


function plusMinus(arr) {
    let count = arr.length;

    let plus = 0;
    let minus = 0;
    let zero = 0;

    arr.map( (item) => {
        if (item > 0) { plus += 1 }
        if (item < 0) { minus += 1 }
        if (item == 0) { zero += 1 }
    })

    // Many on StackExchange mention Number.toFixed() but this did not work. Number.toPrecision() seems to be quite correct.
    console.log((plus / count).toPrecision(6));
    console.log((minus / count).toPrecision(6));
    console.log((zero / count).toPrecision(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

