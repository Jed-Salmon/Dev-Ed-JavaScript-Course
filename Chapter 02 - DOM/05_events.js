// 5. Events

const buttonA = document.querySelector("#submitA");
const buttonB = document.querySelector("#submitB");
const buttonC = document.querySelector("#submitC");
const todoList = document.querySelector("#todoList");
const todoNr = document.querySelector(".todo-nr b");
const mainTitleA = document.querySelector(".main-titleA");
const mainTitleB = document.querySelector(".main-titleB");
const mainTitleC = document.querySelector(".main-titleC");

// Must adhere to camel casing. background-color = backgroundColor.

// Changing css styles:
buttonA.addEventListener("click", function () {
  mainTitleA.style.color = "red";
  mainTitleA.style.fontSize = "50px";
});

// Alternatively you can just add the class itself:
buttonB.addEventListener("click", function () {
  // mainTitleB.classList.add("spectacular");
  // mainTitleB.classList.remove("spectacular");
  mainTitleB.classList.toggle("spectacular"); //adds and removes on-click
});

// event parameter:
buttonC.addEventListener("keydown", function (event) {
  console.log(event); // Gives information for what just happened (which key & code was pressed)
  if (event.keyCode === 13) {
    mainTitleC.classList.toggle("keyPress");
  }
});

// Adding a class to an element is cleaner and reduces code as it's all bundled in the stylesheet.

// View all events:
// https://developer.mozilla.org/en-US/docs/Web/Events
