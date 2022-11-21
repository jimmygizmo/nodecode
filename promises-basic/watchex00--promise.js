#! /usr/bin/env node

// Promise tutorial: https://www.youtube.com/watch?v=DHvZLI7Db8E

// DOCS - Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// MORE ENV SHEBANG OPTIONS FOR NODE (or other programs)
// #! /usr/bin/env -S node --experimental-module  // Use -S to pass node/js interpreter options.
// #! /usr/bin/env -S NODE_ENV=production node  // Set any env vars for the run.
// #! /usr/bin/env -S NODE_OPTIONS=--experimental-modules node  // Alternate way to pass node/js interpreter options.
// #! /usr/bin/env -S node -r ./run/this/script/first/preceding-script.js  // Run another script before current script.
// #! /usr/bin/env -S node --inspect  // Open up the inspection port.
// #! /usr/bin/env -S -i node  // Start with an empty environment. Clear the env before running.
// #! /usr/bin/env -S - node  // Same thing. - dash alone is the same as -i. Clear the env before running.
// #! /usr/bin/env -S npx node@6  // Force use of a specific node version. Must be in npx cache or will download.
// Env shebang: https://alexewerlof.medium.com/node-shebang-e1d4b02f731d


let p = new Promise(
  (resolve, reject) => {
    let a = 1 + 9;
    if (a === 2) {
      resolve("Success")
    } else {
      reject("Failure")
    }
  }
);


p.then(
  (message) => {
    console.log("This is in the .then() ----> " + message)
  }
).catch(
  (message) => {
    console.log("This is in the .catch() ----> " + message)
  }
);

