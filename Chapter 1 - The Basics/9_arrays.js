// 13. Arrays

// List multiple strings into one singular variable using an array.
let listUsers = ["Dev Jed", "John Snow", "Leon Lennon", "You"];

// Access Array
console.log(listUsers[3]); // Returns 'You'.
console.log(typeof listUsers); // Returns Object.

// Alters original value (destructive method)
listUsers.pop(); // Removes the last element of the array.
listUsers.push("NEW"); // Pushes/Adds an extra element to the end of the array.

listUsers.shift(); // Removes the first element of the array.
listUsers.unshift("NEW"); // Adds an extra element to the start of the array.

console.log(listUsers);

console.log(listUsers.length); // Returns 4 by counting each named 'strings' within the array.
console.log(listUsers.indexOf("John Snow")); // Returns a value of 1. (counting from 0)

let ninjas = ["ryu", "sho", "ku"];

let result = ninjas.concat(["You", "Me"]); // Concatenates 'You' and 'Me' onto the array
result = ninjas.join(", "); // Adds ', ' between each item within the array

console.log(result); // Returns: ryu sho ku you me
