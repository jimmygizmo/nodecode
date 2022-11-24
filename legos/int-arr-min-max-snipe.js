#! /usr/bin/env node

// Usage:
// Enter integers separated by spaces on a line then hit enter.
// Then hit Ctrl-D to complete entering data and continue the program.

// Info:
// Snipe in the name refers to the need to "snipe" out one element of the array at a time
// during summing passes. i.e. a slice of one element is removed (sniped) and this slice
// position moves down the array for successive summing of remaining elements.
// Again:
// We need the sums of all possible sets of four of the five elements. This means we make
// five sets by dropping each item successively and then making each set for summation
// from the remainin 4 elements of the array. It's like a moving slice as we do the summing.
// Then we just need the min and the max of the array of the sums.

// Problem requires 64 bit integers, sometimes called bigInt.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

"use strict";

// process.stdin:
// https://nodejs.org/api/process.html#process_process_stdin
// readable.dead()
// https://nodejs.org/api/stream.html#readablereadsize


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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let count = arr.length;
    // console.log(count);
    // let sniped_sums = [];
    let min;
    let max;

    for (let position = 0; position <= count - 1; position += 1 ) {
        let sniped_temp_arr = arr.filter( (_, temp_pos) => temp_pos != position );
        let sniped_temp_arr_sum = BigInt(0);
        sniped_temp_arr.map( item => { sniped_temp_arr_sum += BigInt(item) })
        console.log( sniped_temp_arr_sum );
        if (( sniped_temp_arr_sum > max ) || ( typeof max == typeof undefined )) { max = BigInt(sniped_temp_arr_sum) }
        if (( sniped_temp_arr_sum < min ) || ( typeof min == typeof undefined )) { min = BigInt(sniped_temp_arr_sum) }
        // sniped_sums.push(sniped_temp_arr_sum)
    }
    console.log(min + " " + max)

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

