// Question 1
// Create a function called receivingFunction which accepts one argument. Inside this function check if the argument is a function, and if it is, call the function.
// Create another function called callbackFunction which logs the string: "I am a callback function".
// Call receivingFunction and pass callbackFunction into it as an argument.

function receivingFunction(isFunction) {
  if (typeof isFunction === "function") {
    isFunction();
  }
}

function callbackFunction() {
  console.log("I am a callback function");
}

//  or const callbackFunction = function (){
//  console.log("I am a callback function");
// }

receivingFunction(callbackFunction);

// Question 2
// Convert the following for loop to a forEach loop.

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

// for (let i = 0; i < prizes.length; i++) {
//   console.log(`Prize ${i + 1}: ${prizes[i]}`);
// }

prizes.forEach(function (prize, index) {
  console.log(`Prize ${index + 1}: ${prize}`);
});

// Question 3
// Write code that waits 5 seconds before logging the string: I waited 5 seconds before executing. Store the amount of seconds (5 initially) in a variable so it can be easily changed.

const time = 5;

setTimeout(function () {
  console.log(`I waited ${time} seconds before executing.`);
}, time * 1000);

// or
// const numberOfSeconds = 5;
// function logMessage() {
// console.log(`I waited ${numberOfSeconds} seconds before executing`);
// }
// setTimeout(logMessage, numberOfSeconds * 1000); // the seond argument must be in milliseconds

// Question 4
// Write code that logs the numbers 1 to 4 every 1.5 seconds and then stops.

let num = 0;
const intv = 1500;
const stop = 4;

function logNum() {
  num++;

  console.log(num);

  if (num === stop) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(logNum, intv);
