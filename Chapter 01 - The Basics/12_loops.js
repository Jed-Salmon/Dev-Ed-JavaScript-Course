// 16. For Of, ForEach

// Example 1 - For Of
// Simpler to do and is effective when using large lists of arrays. New to ES6 and will not work on IE.
const names = ["Dev Jed", "Benny", "Bob", "Jim", "Sam"];

for (let name of names) {
  console.log(name);
}

// Access the index of the name within the array:
for (let name of names) {
  console.log(names.indexOf(name));
} // list array index, counting from 0 to 4

for (let name of names) {
  if (name === "Jim") {
    console.log("Stop Here");
    break;
  }
  console.log(name);
} // Lists the names up to 'Bob' then stops (breaks) and runs the code 'Stop Here' in place of Jim.

//
// Example 2 - For Each
// Specifically used for Arrays and is slightly slower (more resourceful) than using For Of.

// First parameter = current value. Whatever is the value at the time we're iterating over.
// Second parameter = index of the current value.
names.forEach(function (name, index) {
  console.log(name, index);
});

names.forEach(function (name, index) {
  if (name === "Jim") {
    console.log("Stop Here");
    // break; -- commented out to avoid 'Uncaught SyntaxError:'
  }
});

// Returns 'Uncaught SyntaxError: unlabeled break must be inside loop or switch'.
// We can not use break as it's inside a function. You can only break out of loops/switch.
// Continue will not work either.
