// 6. Prototype

// PROBLEM WITH PREVIOUS CODE (constructorFunctions.js):
// The constructor function (Todo) attached all the same methods to each object. Meaning each function is a duplicate.
// To prove this: todo.getTodoName === todo2.getTodoName returns false (two separate functions despite being the same).
// This is a problem when scaling up a project. Having so many duplicate methods will result in excess of stored memory.

// To resolve this, we can use prototype:
// Every object has an internal property called 'prototype'.
// A prototype is a reference to another object which contains common properties and attributes across all instances.

function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
}

// Add all methods onto the Todo functions prototype:
Todo.prototype.getTodoName = function () {
  console.log(this.name);
};

const todo = new Todo("Buy Eggs", false);
const todo2 = new Todo("File paperwork", false);

console.log(todo, todo2);
todo.getTodoName();
todo2.getTodoName();

// Todo.prototype stops adding the getTodoName function on every object.
// It gets added to the Todo function prototype property, rather than on each todo instance.

// To clarify:
// When a constructor function is built, the newly created object (todo & todo2) inherit the prototype properties.
// We simply attach everything on the prototype of the constructor function (Todo).
// That way, we don't need to generate a new method each time we create a new object.

// As a general rule of practice, DO NOT attach methods directly inside constructor functions.
// Instead attach it to the prototype so you do not duplicate the code every time you generate a new instance.

// Example 2:
const arr = new Array(1, 2, 3, 4, 5);
arr.push(6);
console.log(arr);
// Arrays are objects and all objects have a prototype property.
// If we look in the prototype property we can see all the methods the array inherits.
// Every time we create a new array (even without specifying 'new') we inherit the prototype methods.

// Example 3:
// Primitive data types (non-objects):
const name = "devjed";
const upper = name.toUpperCase;
console.log(typeof upper); // Still a string but how does the method work?

const objName = new String("hello there");
console.log(objName);
console.log(typeof objName);

// When using a primitive datatype that utilizes a method (name.toUpperCase)
// JavaScript temporarily wraps inside an object so you can execute that method.
// Same as writing new Number, new String, new Array etc.
// But after running it returns to its primitive data type.
