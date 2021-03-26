// 11. Functions
// A JavaScript function is a block of reusable code designed to perform a particular task or calculate a value.

function functionName(parameters) {}

// EXAMPLE 1
function greet(text, age) {
  console.log("Welcome to our website " + text);
  console.log(age);
} // No semi colon (;)

console.log("rest of the code");

function signUp() {
  let name = prompt("What is your name?"); // variables defined within {} are not accessible outside their block.
  greet(name, 22); // These are Arguments. An argument is an expression used when calling the method.
}

signUp();

// Parameters are the receiving variable used w/in the function/block.
// Arguments are the value/variable-reference being passed in when the function is called.
// A method has parameters and takes arguments.

// EXAMPLE 2
function max(nr1 = 0, nr2 = 0) {
  // = 0 is the default case if no param is entered by user.
  if (nr1 > nr2) {
    return nr1;
  } else {
    return nr2;
  }
}

let inbox = max(1, 5);
// If none or only one argument is entered, it will result in NaN.
// Default case has been added to avoid this.

console.log(inbox); // Returns the bigger of the two numbers

// Function Expression
const speak = function () {
  console.log("good day!");
}; // Must end with semi colon (;)

speak(); // invoke the function by calling the variable name.

// Function expression is when you store function in a variable.
// Function declaration is when we don't store in a variable.

// Function expressions are not hoisted like a declaration would.
// Meaning function expressions can't be invoked before they are called, whereas function declaration can.

// Return definition & usage:
// The return statement stops the execution of a function and returns a value from that function.
