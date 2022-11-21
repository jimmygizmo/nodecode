#! /usr/bin/env node

// Promise tutorial: https://www.youtube.com/watch?v=DHvZLI7Db8E

// DOCS - Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// This is actually a poor example in terms of the "story" involved. The logic is not clear
// about what is the positive or negative outcome and what is the nature of the cause.
// A better example is needed. TODO: Use same code/logic but illustrate a better example.

const userLeft  = false;

const userWatchingCatMeme = false;

// ==== CREATE THE PROMISE ====
// Calling this (with no arguments) returns a promise, which has two methods,
// a .then() method and a .catch() method.
// The Promise looks like a function being returned with the args (resolve, reject).
// promise_maker() -> new_func(resolve, reject) -> returns nothing but calls defined .then() or .catch()
// Whether .then() or .catch() gets called, depends on the world.
function watchTutorialPromise() {
  return new Promise(
    ( resolve, reject ) => {
      if ( userLeft ) {  // REJECT
        reject(
          {
            name: "The user who left",
            message: "Nothing we can do."
          }
        );
      } else if ( userWatchingCatMeme ) {  // REJECT
        reject(
          {
            name: "The user who is watching a cat meme",
            message: "WebDevSimplified < Cat"
          }
        );
      } else {  // RESOLVE
        resolve(
          "Thumbs up and Subscribe"
        );
      }
    }
  );  // Promise()
}


// .then() and .catch() get defined when you first call promise_maker(). That's a main feature of this stuff.

// ==== CALL THE PROMISE .then() and .catch() passing anonymous function to each. ====
// .then() gets the "resolve" function
// .catch() gets the "reject" function
watchTutorialPromise().then(
  (message) => {
    console.log("Success: " + message)
  }
).catch(
  (error) => {
    console.log( error.name + ": " + error.message )
  }
);

