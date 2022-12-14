#! /usr/bin/env node

// Promise tutorial: https://www.youtube.com/watch?v=DHvZLI7Db8E

// DOCS - Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// TODO: CLARIFY: The docs refer to "fulfilled" vs. "rejected". Seems like fufill=resolve. Confirm this.
// "resolve" comes from the tut which is a bit of a weird tut anyhow, in terms of using good analogy/concepts.


const recordVideoOne = new Promise(
  (resolve, reject) => {
    resolve("Video one recorded.");
  }
);

const recordVideoTwo = new Promise(
  (resolve, reject) => {
    resolve("Video two recorded.");
  }
);

const recordVideoThree = new Promise(
  (resolve, reject) => {
    resolve("Video three recorded.");
  }
);


// Waits for everything to complete before returning. Returns an array of results from all promises.
Promise.all(
  [
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
  ]
).then(
  (messages) => {
    console.log(messages);
  }
);


// Returns as soon as the first promise returns. Returns only the single result of the first promise.
Promise.race(
  [
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]
).then(
  (message) => {
    console.log(message);
  }
);

