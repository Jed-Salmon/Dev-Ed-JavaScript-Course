// 6. Some and Every

// Checks (Run a test and verify)
const games = [
  {title: "Mass Effect", rating: 9.5 },
  {title: "League of Legends", rating: 5 },
  {title: "Last of Us", rating: 10 },
  {title: "God of War", rating: 10 },
  {title: "WWE 2k20", rating: 4 }
]

// EVERY:
const checkRating = games.every(function(game){
  return game.rating > 8;
});
// Every only return a boolean (true or false).
console.log(checkRating);
// Returns false as not all are greater than 8.
// ALL (EVERY) condition has to be met as true.

//
// SOME:
// Returns true as long as one value is true.
const someRating = games.some(function(game){
  return game.rating > 8;
});

console.log(someRating); // True