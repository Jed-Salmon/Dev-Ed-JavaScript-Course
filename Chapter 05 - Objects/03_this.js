// 3. This Keyword

// this keyword gets created in the global execution context or when we invoke another function

console.log(this); // refers to window object

// 'this' is a dynamic pointer. It refers to an object.
// 'this' can change based on what it is pointing to.

const user = {
  name: "jed",
  sayHi() {
    console.log(this);
    console.log(this.name); // same as user.name
  },
};

// 'this' gets set when the function gets invoked.
user.sayHi(); // 'this' refers/points to the object "user"

// Example 2:
const mod = {
  name: "moderator",
};

const admin = {
  name: "administrator",
};

function sayHello() {
  console.log(this);
}

// attaches sayHello function as a method to the object
mod.hi = sayHello;
admin.hi = sayHello;

mod.hi(); // refers to mod
admin.hi(); // refers to admin

// 'this' is dynamic, which stops the need for repeating code.
// If we were to use 'user.name' on the function sayHello, we would need to repeat it on both 'mod' & 'admin'.

// Example 3
// Using 'this' with the DOM:
const lists = document.querySelectorAll("li");

lists.forEach((li) => {
  li.addEventListener("click", function () {
    console.log(this);
  });
});

// Example 4
const viewer = {
  name: "clara",
  videos: ["html", "ccs", "js", "react"],
  greet() {
    console.log(`Hello there ${this.name}`);
    // Add normal function:
    // const getVideos = function() {
    // normal function resets 'this' keyword.
    const getVideos = () => {
      // Arrow function does not
      console.log(`You currently have ${this.videos.length} videos to watch.`);
    };
    getVideos();
  }, // For arrow functions, a new this keyword does not get set (keeps the initial value from greet method).
};
viewer.greet();

const viewer2 = {
  name: "Alex",
  videos: [
    "ui/ux design theory",
    "figma prototyping",
    "best graphic tablet",
    "adobe xd cards",
  ],
  greet() {
    console.log(`Hello there ${this.name}`);
    this.videos.forEach((video) => {
      console.log(this.name);
    });
  },
};
viewer2.greet();

// When invoking a function declaration inside of a method, it gets its own keyword this (it resets).
// Arrow functions don't get re-assigned their own this keyword, so the context will still be the methods.
// So when creating new functions inside of methods and you want to use the 'this' keyword, use arrow functions!

/*
when we use a normal function as a method and invoke that method, javascript
sets the value of the this keyword to the object that the method was used on.

When we use an arrow function to create the method, javascript will not set the
value of the this keyword to be the object. So the value of 'this' does not change
from the value it was at the point in the code that the arrow function was invoked.
*/
