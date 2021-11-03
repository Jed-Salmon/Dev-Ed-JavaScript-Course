// 8. Arrow Functions

//
// MAP:
const newVideos2 = videos.map(function(video){
  return video.length < 10 ? video : "nope";
});

// ES6 Arrow Function =>
const arrowVideos = videos.map(video => video.length < 10 ? video : "nope");

//
// FIND:
const searchTutorial = videos.find(function (video){
  return video.includes('HTML');
});

// ES6 Arrow Function =>
const arrowTutorial = videos.find(video => video.includes('HTML'));

//
// FILTER:
const shortSearch = videos.filter(function (video){
  return video.length < 10;
});

// ES6 Arrow Function =>
const arrowShortSearch = videos.filter(video => video.length < 10);

//
// EVERY:
const checkRating = games.every(function(game){
  return game.rating > 8;
});

// ES6 Arrow Function =>
const arrowCheckRating = games.every(game => game.rating > 8);

//
// SOME
const someRating = games.some(function(game){
  return game.rating > 8;
});

// ES6 Arrow Function =>
const arrowSomeRating = games.some(game => game.rating > 8);