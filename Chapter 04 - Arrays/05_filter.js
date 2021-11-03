// 5. Filter
const videos = [
  "Pranking my sister (gone wrong)",
  "How to JavaScript",
  "HTML, CSS Web Design & Development",
  "Learn to play Mozart's classics",
  "HTML basics",
  "css",
  "java",
  "programming",
  "ui/ux"
];

// FILTER:
// Similar to find but can return multiple values.
const shortSearch = videos.filter(function (video){
  return video.length < 10;
});
// Filters out multiple values
console.log(shortSearch);

// Example 2:
const games = [
  {title: "Mass Effect", rating: 9.5 },
  {title: "League of Legends", rating: 5 },
  {title: "Last of Us", rating: 10 },
  {title: "God of War", rating: 10 },
  {title: "WWE 2k20", rating: 4 }
]
// filter out games rated higher than 9.5:
const highRating = games.filter(function (game){
  return game.rating > 9;
});

console.log(highRating);