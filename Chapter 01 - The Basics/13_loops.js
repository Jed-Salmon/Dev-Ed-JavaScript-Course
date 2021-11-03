// 17. For In, While Loops

// Example 1: For In
const user = {
  // Object
  name: "Dev Jed", // name is the key, 'Dev Jed' is the value.
  age: 22, // The entire line (age: 22) is a property.
  subscribers: 500,
  money: "nope",
};

for (let x in user) {
  console.log(x);
} // logs each key of user

console.log(user.subscribers);
console.log(user["subscribers"]); // Returns same as above (500)

for (let x in user) {
  console.log(user[x]);
} // Returns each value of user

// For objects we use 'in' rather than of.

//
// Example 2: While
let i = 0;

while (i < 10) {
  // True
  console.log(i);
  i++; // Increment
} // If it always evaluates true, add an increment otherwise it will run infinitely and things will break!

while (i > 20) {
  // False - Returns nothing
}

// Example 3: Do While
do {
  console.log(i);
  i++;
} while (i > 20); // False
// Returns 0 as the do statement will still run once.

// If a while statement evaluates false, nothing runs.
// If a do statement evaluates false, it runs once.
