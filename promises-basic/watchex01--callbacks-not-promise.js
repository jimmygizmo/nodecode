#! /usr/bin/env node

// Promise tutorial: https://www.youtube.com/watch?v=DHvZLI7Db8E

const userLeft  = false;

const userWatchingCatMeme = true;

// Calling with two anonymous functions as arguments. Each takes one message or error arg.
// Calling this returns nothing but calls one of the anonymous function
// callbacks, depending on the world.
// Think of this as the caller_backer() function.

function watchTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback(
      {
        name: "User left",
        message: "bummer"
      }
    )
  } else if (userWatchingCatMeme) {
    errorCallback(
      {
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat"
      }
    )
} else {
  callback("Thumbs up and Subscribe");
  }
};


// The anonymous callback functions first get defined when you call the caller_backer() func, like this:

// Arguments are two anonymous functions. The functions have different signatures.
// One takes a string. The other takes two-property error object.
watchTutorialCallback(
  (message) => {
    console.log("Success: " + message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

