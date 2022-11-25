#! /usr/bin/env node

'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }
main();

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    let counts = {};
    a.map( elem => {
        if ( typeof counts[elem] === 'undefined' ) {
            console.log('init: ' + elem)
            counts[elem] = 1;
        } else {
            counts[elem] += 1;
        }
    })
    let found;
    Object.entries(counts).map( ([k, v]) => {
        console.log( k + ': ' + v );
        if ( v == 1 ) {
            found = k;
        }
    })
    return found;
    // console.log(counts);
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const n = parseInt(readLine().trim(), 10);

    // const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // const result = lonelyinteger(a);

    // const result = lonelyinteger([1, 2, 3, 4, 3 ,2 ,1]);
    const result = lonelyinteger([1]);

    console.log(result);

    // ws.write(result + '\n');

    // ws.end();
}
