// 10. Creating Copies

// SPREAD OPERATOR [... ___]
// Expands all of your elements inside another array

const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

// Sort mutates so to combat this we can create a copy:
const descRatings = [...ratings];
console.log(descRatings); // Copied

descRatings.sort((a, b) => b - a);
console.log(descRatings); // Sort only mutates the copy

console.log(ratings); // ratings is not mutated.

const ascRatings = [...ratings];
ascRatings.sort((a, b) => a - b);
console.log(ascRatings);

// spread can be used on more than just arrays but will behave differently
// Using spread on a string:
const name = "Jed";
const letters = [...name];
console.log(letters);

// We used the split method in prior a lecture to achieve the same result:
const splitName = name.split("");
console.log(splitName);

// Using spread to combine arrays together:
const names = ["Jed", "Ed", "You"];
const otherNames = ["John", "Bon", "Jovi"];

// spread method
const spreadAllNames = [...names, ...otherNames];
console.log(spreadAllNames);

// You can also:
const spreadAllNames2 = ["this", "person", "is", ...otherNames];
console.log(spreadAllNames2);

// Whereas before we used the concat method:
const allNames = names.concat(otherNames);
console.log(allNames);

console.log(names); // Both concat & spread does not mutate
