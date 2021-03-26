// 12. Objects

// Object
const user = {
  // Properties
  name: "Jed", // key : value pair
  age: 22,
  married: false,
  greet: function () {
    console.log("Hello there!");
  },
};

// Methods are functions that are inside an object (e.g. for the property greet).

console.log(); // Javascript supplies us with pre-made objects with functions and methods to use.
user.greet(); // Here we made our own.

// Type "window" to console to see all the browser objects.
