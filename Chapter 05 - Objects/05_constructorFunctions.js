// 5. Constructor Functions

// Moving onto Object Oriented Programming (OOP):
// Constructor functions are functions that will generate an object.

// To more easily identify constructor functions, start with an UPPERCASE.
function Todo(name, completed) {
  console.log(this); // empty object
  this.name = name;
  (this.completed = completed),
    // Add methods to constructor functions
    (this.getTodoName = function () {
      console.log(this.name);
    });
}

const todo = new Todo("Buy Eggs", false);
const todo2 = new Todo("File paperwork", false);
// 'new' keyword generates a new empty object
// 'new' sets the keyword 'this' to the new object

console.log(todo, todo2); // Generates new object

todo.getTodoName();
todo2.getTodoName();

// Allows for one base function that we can use to attach different methods and properties to.
// Then we can create instances (objects) of that function, which inherit the properties

// the constructor function is object oriented with the use of (THIS). Instead of writing functions and invoking all over the place like when we created the todo app, we can use the OOP method of coding by setting constructor functions and then creating any variable of our choice and then using the NEW key word to create objects that will be attached to our existing constructor function.
