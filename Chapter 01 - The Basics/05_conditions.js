// 9. Comparisons and Conditions

// Equal to
console.log(5 == 5); /* Returns True */
console.log(2 == 5); /* Returns False */

// Not equal
console.log(5 != 5); /* Returns False */
console.log(2 != 5); /* Returns True */

// Greater than & Less Than
console.log(5 > 10); /* Returns False */
console.log(10 > 6); /* Returns True */
console.log(10 < 3); /* Returns False */
console.log(6 < 10); /* Returns True */

console.log(10 >= 10); /* Returns True */
console.log(6 <= 6); /* Returns True */

let name = "shaun";
console.log(name == "shaun"); // Returns True
console.log(name == "Shaun"); // Returns False

console.log(name > "dylan"); // Returns True because s is later in the alphabet which JS grants as greater than.
console.log(name > "Shaun"); // Returns False because JS recognizes lowercase as greater than uppercase.

console.log(6 == "10"); /* Returns True */
console.log(6 === "10"); /* Returns False */
console.log(6 != "10"); /* Returns False */
console.log(6 !== "10"); /* Returns True */

// Double equal does not check data type. Triple equal does.
// Always use triple equals ===

// If & Else
const access = false;

//  if statement results in a boolean. It checks whether a value is true.
if (access) {
  console.log("Hey hey, I am me!");
  // if the first state renders false then...
} else {
  console.log("Hey I don't have access!");
}

// Utilise Comparison and logical operators
let age = 22;
let wallet = 0;

// && - both action/statements have to be true
// || - one action/statement has to be true

if (age >= 21 && wallet >= 0) {
  // != == can also be used
  console.log("You have access!");
} else {
  console.log("Hey, you're too young to be here!");
}

// Else if
let ageIs = 22;
let wallet1 = -5;

if (ageIs >= 60 || ageIs < 18) {
  console.log("You are eligible for free transport!.");
  // Once statement is true, the rest is skipped.
} else if (wallet1 >= 0) {
  console.log(
    "you're not eligible for free public transport. Please purchase a ticket"
  );
} else {
  console.log("You have outstanding fees associated with your account");
}
