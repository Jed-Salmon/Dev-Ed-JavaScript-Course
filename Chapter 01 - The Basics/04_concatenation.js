// 7. Concatenation

// Numbers
const bank1 = 100;
const bank2 = 50;

const allBanks = bank1 + bank2;

console.log(allBanks); // Returns 150

// Strings
const greetings = "Welcome to our website ";
const user = "Jed";
console.log(greetings + user);

let quote1 = 'Steve Jobs once said "simplicity is simply brilliant."'; // You can use backslash
let quote2 = 'Steve Jobs once said "simplicity is simply brilliant."'; // Apostrophe surrounding quotations or vice versa
let quote3 = `Steve Jobs once said "simplicity isn't always the easiest of tasks."`; // Backtick ` can be used when quotations and apostrophe are both needed.

console.log(quote3);

// Shorthand for adding strings together using variables
const greetingShorthand = `Hey! welcome to our site ${user}`;
console.log(greetingShorthand);

console.log(1 + "1");
// Returns 11 by transforming the number 1 into a string and adds them together

console.log("hello" / 10); /* Returns NaN (Not a Number) */

let score = "100";
score = Number(score); // Turns string in a number
console.log(score + 1); // Returns 101

let result = Number("hello");
console.log(result); // Returns NaN

result = String(50);
console.log(result, typeof result); // Returns 50 & String

result = Boolean(100);
console.log(result, typeof result); // Returns True (truthy value) & Boolean

result = Boolean(0);
console.log(result, typeof result); // Returns False (falsy value) & Boolean
