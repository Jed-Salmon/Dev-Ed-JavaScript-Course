// 6. Primitive Data Types

// Numbers
const day = 5;

// Strings
const name = "Dev Jed";
console.log(typeof name); /* Returns 'string' */

// Booleans
const isLogged = true;
const isLogged = false;
const email = "luigi@thenetninja.co.uk";

let result = email.includes("@"); // True
let result = email.includes("bowser"); // False

// Undefined - Not declared a value yet
let date;
console.log(date);

// Null - Explicitly assign a value of nothing
let minute = null;

// Objects - Wrapped in curly braces {}
// Include: Arrays, Object Literals, Functions, Dates etc
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Symbol - Advanced. Used as a unique identifer inside objects so to not collide with other properties.
const name = Symbol();
