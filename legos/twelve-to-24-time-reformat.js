#! /usr/bin/env node

"use strict";


const fs = require('fs');
// TODO: RECOMMENDED: import { createWriteStream } from 'fs';
// Then call as "createWriteStream" and not "fs.createWriteStream"

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // const parseTimeRegExp = /(\d+)\:(\d+)\:(\d+)(AM|PM)/ig;
    const parseTimeRegExp = /(\d{2}):(\d{2}):(\d{2})(AM|PM)/;
    // const parseTimeRegExp = /(\d{2}):(\d{2}):(\d{2})/;  // Works but is partial.
    let marr = s.match(parseTimeRegExp)
    if (marr) {
        console.log(marr.groups);
    } else {
        console.log('ERROR: unrecognized time format. failed to parse.');
    }
    // console.log(marr);
    console.log(marr[0] + ' ' + marr[1] + ' ' + marr[2] + ' ' + marr[3] + ' ' + marr[4]);


    // Write your code here

}

// String.prototype.matchAll()
// let marr = s.matchAll(parseTimeRegExp)  // NOTE that String.matchAll() requires global 'g' option on RE: /abc/g
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
// * Related. We don't actually need matchAll in this case. We expect only one occurance of the pattern.

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    // ws.write(result + '\n');
   console.log(result + '\n');

    // ws.end();
}

