// 1. Primitives Vs Reference Types

// Primitive Data Type:
const name = 'Jed';
// name = 'Ed'; 
// Returns an error (constants can't' be re-declared).

// Reference Data Type (array/object)
const names = ['Jed', 'Ed', 'Laura'];
names[2] = "Drake"; 
names.push('Liam');
console.log(names);  // does not error out.
// Above just modifies the arrays value.

// We can not change the array by re-declaring names.
// names = ['Jed', 'Drake', 'Laura', 'Liam'];
// console.log(names); // Errors out

// Example 2:
// Primitives:
let bank = 250;
let newBank = bank;
console.log(bank, newBank); // 250 250

newBank = 500;
console.log(bank, newBank); // 250 500
// Only newBank will change its value.

// Reference:
const people = ['Rylo', 'Mylo', 'Jackson'];
const newPeople = people;
console.log(newPeople);

newPeople.push('Jenny');

console.log(people); // contains 'Jenny'
// Despite modifying newPeople, it will reference and change the original (people).

const tweet = {
  name: 'Jed',
  tweets: 62,
  age: 22
}

const newTweet = tweet;
newTweet.tweets = 63;

console.log(tweet); 
// updates tweets to 63

// Objects and Arrays will always keep a reference to their original source.