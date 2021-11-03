//  4. Find
const videos = [
  "Pranking my sister (gone wrong)",
  "How to JavaScript",
  "HTML, CSS Web Design & Development",
  "Learn to play Mozart's classics",
  "HTML basics"
];

// FIND:
// Goes through each item in an array.
// Once it finds the specified value it will return it.

const searchTutorial = videos.find(function (video){
  // checks for condition and if true:
  return video.includes('HTML');
}); // stops running after the first condition is met.
// Only the first array item with 'HTML' is returned

console.log(searchTutorial);