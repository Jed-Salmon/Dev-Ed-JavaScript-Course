// 6. Event Bubbling

// Part 1. Click to remove list items:
const button = document.querySelector("#submit");
const todoList = document.querySelector("#todoList");
const todoNr = document.querySelector(".todo-nr b");
const items = todoList.children;
const nameInput = document.querySelector(".name-input");

// Add new items on click:
button.addEventListener("click", function (e) {
  // Stops natural behavior
  e.preventDefault(); // Stops form from refreshing page
  // Create the element
  const newItem = document.createElement("li");
  // Adding class
  newItem.classList.add("item");
  // Adding text
  newItem.innerText = nameInput.value; // The value property sets/returns the value of the attribute.
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
  // Delete the value from the input
  nameInput.value = "";
  // Attaches the listener
  newItem.addEventListener("click", deleteItem);
});

// Runs for loop on the two list items. The new list items are NOT looped though!
// for (item of items) {
//   item.addEventListener("click", deleteItem);
// }

function deleteItem(e) {
  console.log(e.target); // The target event property returns the element that triggered the event.
  e.stopPropagation(); // Stops from bubbling up
  e.target.remove(); // removes the element
}

// first parameter is always the event (e).
// Tells us what just happened. In our case a "click" with a reference target (li)
// Gives us specific access to the target we want to click on.

// Part 2. Event Bubbling:
todoList.addEventListener("click", function () {
  todoList.classList.toggle("fade");
}); // We click on the item to remove, but the ul also gets hidden.
// Because we are not just clicking on the li, but the window, body, ul and li!
// Using .stopPropagation avoids bubbling from happening.
