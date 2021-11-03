// 5. Events

// Events are something the browser or user does. (click, scroll, hover, key-press, etc.)
// Event listeners looks for one of the above.

const button = document.querySelector("#submit");
const todoList = document.querySelector("#todoList");
const todoNr = document.querySelector(".todo-nr b");
const items = todoList.children;

// Attach event listener:
button.addEventListener("click", function () {
  console.log("new item added");
}); // Anonymous Function

button.addEventListener("click", addItem); // Function reference
// Do not need parenthesis for addItem, otherwise it would invoke it and would run automatically.
// We want it to only run once the event listener has been triggered by a click.

function addItem() {
  console.log("new item added");
}

// addEventListener takes in two parameters:
// First is the event you want to use ("click") or ("hover").
// Second is a function reference or anonymous for one time use only.

// Add new items on click:
button.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = `item ${items.length + 1}`;
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
});
