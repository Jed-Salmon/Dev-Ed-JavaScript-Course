// 2. Callbacks, Higher Order Functions

const videos = [
  "Pranking my sister (gone wrong)",
  "How to JavaScript",
  "HTML, CSS Web Design & Development",
  "Learn to play Mozart's classics"
];

videos.push('Live news feed');

videos.forEach(function (video) {
  // console.log("run");
  // console.log(video);
}); // Callback is executed for each iteration

// forEach is a higher order function.
// Higher order functions take another function as a parameter:
function repeater(fn){
  fn();
  fn();
  fn();
}

function sayHello (){
  console.log("Hello There!");
}

repeater(sayHello);

// Anonymous function version
repeater(function(){
  console.log("Hello There!");
});

// Callback function runs when we click. Doesn't get executed immediately.
window.addEventlistener('click', function(){})