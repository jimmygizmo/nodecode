#! /usr/bin/env node

'use strict';

console.log(flippingBits(2147483647));  // 2147483648 
console.log(flippingBits(1));  // 4294967294 
console.log(flippingBits(0));  // 4294967295


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

/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    let bstr = n.toString(2);
    console.log(bstr);
    let zeropad = '00000000000000000000000000000000' + bstr;
    console.log(zeropad);

    const right32 = (preTrimmed) => {
        const trimRE = /(\d{32})$/;
        let marr2 = preTrimmed.match(trimRE);
        return marr2[1];
    }

    let bin32 = right32(zeropad);
    console.log(bin32);

    let flipped = [];

    // for ( let c of bin32 ) { c => {  // Did not work
    [...bin32].forEach( c => {
        // console.log(c);
        if ( c == '0' ) {
            flipped.push('1')
        } else if ( c == '1' ) {
            flipped.push('0')
        } 
    })
    // console.log(flipped);

    let fstr = flipped.join('');
    console.log(fstr);

    let fint = parseInt(fstr, 2);
    console.log(fint);
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const q = parseInt(readLine().trim(), 10);

//     for (let qItr = 0; qItr < q; qItr++) {
//         const n = parseInt(readLine().trim(), 10);

//         const result = flippingBits(n);

//         ws.write(result + '\n');
//     }

//     ws.end();
// }

