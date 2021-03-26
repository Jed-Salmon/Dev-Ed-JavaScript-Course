// 9. Sort...weird
const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

// SORT:
items.sort();
console.log(items); // Sorts alphabetical

ratings.sort();
console.log(ratings);
// Sorts by first numerical value
// 10, 2, 22, 4, 45.6, 56, 80, 92

// Pass in compare function
// Compare first two values
// Sorts based on said values

ratings.sort((a, b) => a - b); // Ascending
ratings.sort((a, b) => b - a); // Descending
console.log(ratings);

// Explanation:
// compare function (a, b)
// returns negative, zero or positive (a - b)

// If result is negative, then "a" is sorted before "b"
// If result is positive, then "b" is sorted before "a"
// If two values are the same (92 - 92) then no change.

// First example would take 92 (a) and 56 (b)
// 92-56 is positive number so "b" is sorted before "a"

//
// Example 2:
// Sort game ratings in descending order:
const games = [
  { title: "Mass Effect", rating: 9.5 },
  { title: "League of Legends", rating: 5 },
  { title: "Last of Us", rating: 10 },
  { title: "God of War", rating: 10 },
  { title: "WWE 2k20", rating: 4 },
];

games.sort((a, b) => b.rating - a.rating);

console.log(games);

// BE AWARE THAT SORT WILL MUTATE THE ORIGINAL ARRAY!
