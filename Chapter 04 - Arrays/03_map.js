// 3. Map

const videos = [
  "Pranking my sister (gone wrong)",
  "How to JavaScript",
  "HTML, CSS Web Design & Development",
  "Learn to play Mozart's classics"
];

// FOREACH:
// videos.forEach(function (video) {
//   // console.log(video);
// });
// Just loops over logs each item in the array.
// Doesn't return or save anything (undefined).

// MAP:
// Map creates a copy of an array, in which we can modify.
const newVideos = videos.map(function(video){
  console.log(video);
  return video.toUpperCase();
});

newVideos.push('A visit to the zoo');

console.log(videos); // Map doesn't mutate the original array
console.log(newVideos);

// Use map for modifying arrays.
// Simpler way of copying an array in upcoming lecture.