// 7. Session and Local Storage

// Part 1.
// Local Storage:
// Pass in key-value pair
// We can only pass in strings to localStorage
localStorage.setItem("user", "Jed");
localStorage.setItem("todo", "Feed the dog");
localStorage.setItem("todo", "Feed ourselves"); // Overwrites original todo

// Getting local storage back:
const user = localStorage.getItem("todo");
console.log(user);

// Clear local storage:
// localStorage.clear();

// Session Storage:
sessionStorage.setItem("todoList", "Guitar Session");

// Local storage persists after closing the browser/tab
// Session storage is lost after closing the browser/tab

// Part 2.
// Keeping array/object format in local storage:
const arrayList = ["feed the dog", "wash", "listen to music"];

const objectList = {
  todo1: "feed the cat",
  todo2: "feed myself",
};

localStorage.setItem("todos1", JSON.stringify(arrayList));
localStorage.setItem("todos2", JSON.stringify(objectList));
// Without JSON.stringify it passed an array which was converted to string format.
// With JSON.stringify it still is a string but keeps the array structure [brackets].

// Using JSON.parse to turn it back into an array format:
const retrieved1 = JSON.parse(localStorage.getItem("todos1"));
const retrieved2 = JSON.parse(localStorage.getItem("todos2"));
console.log(retrieved1);
console.log(retrieved2);

// To Summarize:
// Session and local storage can only store strings
// You have to use JSON.stringify and JSON.parse methods to keep an objects/arrays structure.

// We took an array/object and stringified it.
// When retrieving it, we parsed it back into it's original form.
// This will be used a lot with Local Storage.
