// 1. The Global Execution Context and Hoisting

// Whenever you run any JavaScript file (even if empty) will always run the Global Execution Context
// The Global Execution context runs before any of your own code runs.

// CREATION PHASE:
// The 'creation phase' creates the "this" variable and a global object (window object for browsers)
// The JavaScript engine allocates memory for function declarations and stores them on the global object

// EXECUTION PHASE:
// Starts running the code line by line.
// Assigns the 'real' values to the variables already present in the memory.

// Hoisting
sayHi(); // Prints hello

function sayHi() {
  console.log("hello")
}

// Invoking the function prior to declaration is possible with function declaration
// This is because JavaScript allocates memory for our functions during the creation process.
// This is not the case with function expressions using let and const (var will return undefined).