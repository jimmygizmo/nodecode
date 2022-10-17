#! /usr/bin/env node

// Promise tutorial: https://www.youtube.com/watch?v=DHvZLI7Db8E

const userLeft  = false;

const userWatchingCatMeme = false;


// Calling this (with no arguments) returns a promise, which has two methods,
// a .then() method and a .catch() method.
// The Promise looks like a function being returned with the args (resolve, reject).
// promise_maker() -> new_func(resolve, reject) -> returns nothing but calls defined .then() or .catch()
// Whether .then() or .catch() gets called, depends on the world.
function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User left",
        message: "bummer"
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat"
      })
    } else {
      resolve("Thumbs up and Subscribe")
    }
  })  // Promise()
}


// .then() and .catch() get defined when you first call promise_maker(). That's a main feature of this stuff.

// Calling with arguments which are two anonymous functions.
watchTutorialPromise().then( (message) => {
  console.log("Success: " + message)
}).catch( (error) => {
  console.log(error.name + " " + error.message)
})

