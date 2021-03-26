// 7. Ternary Operator

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

// MAP:
const newVideos = videos.map(function(video){
  if(video.length < 10){
    return video;
  } else {
    return "nope";
  }
});
console.log(newVideos);

// Above can be simplified using ternary operator:
const newVideos2 = videos.map(function(video){
  return video.length < 10 ? video : "nope";
});

console.log(newVideos2);

// if statement are useful when running more complex code like adding block scope variables or functions etc.
// Use ternary operator when checking for only a single condition (if...else).