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

function timeConversionInitial(s) {
    const parseTimeRegExp = /(\d+):(\d{2}):(\d{2})(AM|PM)/;
    let marr = s.match(parseTimeRegExp);
    let hours = parseInt(marr[1], 10);
    let mins = parseInt(marr[2], 10);
    let secs = parseInt(marr[3], 10);
    let pm = marr[4] === 'PM' ? true : false;

    if (marr) {
        console.log('Hours: ' + marr[1] + '  Minutes: ' + marr[2] + '  Seconds: ' + marr[3] + '  Phase: ' + marr[4]);
        console.log('hours: ' + hours + '  mins: ' + mins + '  secs: ' + secs + '  PM?: ' + pm);
    } else {
        console.log('ERROR: unrecognized time format. failed to parse input string.');
    }

    // It would seem that any other condition other than what all this covers, is an input error and an invalid time.
    if (pm) {
        if ( hours < 12 ) {
            hours += 12;
        }
    } else {  // am
        if ( hours == 12) {
            hours = 0;
        }
    }

    let shours = '00' + hours.toString(10);
    let smins = '00' + mins.toString(10);
    let ssecs = '00' + secs.toString(10);

    const rightTwo = (preTrimmed) => {
        const trimRE = /(\d{2})$/;
        let marr2 = preTrimmed.match(trimRE);
        return marr2[1];
    }

    let time24 = rightTwo(shours) + ':' + rightTwo(smins) + ':' + rightTwo(ssecs);
    return time24
}

function timeConversion(s) {
    const parseTimeRegExp = /(\d+):(\d{2}):(\d{2})(AM|PM)/;
    let marr = s.match(parseTimeRegExp);
    let hours = parseInt(marr[1], 10);
    let mins = parseInt(marr[2], 10);
    let secs = parseInt(marr[3], 10);
    let pm = marr[4] === 'PM' ? true : false;

    if (pm) {
        if ( hours < 12 ) {
            hours += 12;
        }
        // No such thing as 0 PM so we don't check hours == 0
    } else {  // am
        if ( hours == 12) {
            hours = 0;
        }
    }

    let shours = '00' + hours.toString(10);
    let smins = '00' + mins.toString(10);
    let ssecs = '00' + secs.toString(10);

    const rightTwo = (preTrimmed) => {
        const trimRE = /(\d{2})$/;
        let marr2 = preTrimmed.match(trimRE);
        return marr2[1];
    }

    return( rightTwo(shours) + ':' + rightTwo(smins) + ':' + rightTwo(ssecs) );
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

