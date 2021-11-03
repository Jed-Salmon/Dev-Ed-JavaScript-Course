// 4. Collections and Nodelists

const collectionItems = document.getElementsByClassName("item");

// Add new todo item using HTML Collection:
const todoList = document.getElementById("todoList");
const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item3";

const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "Item4";

todoList.appendChild(newItem);
todoList.appendChild(anotherItem);

// Update the amount of items we have automatically
const todoNr = document.getElementsByClassName("todo-nr")[0];
todoNr.innerText = collectionItems.length;
console.log(collectionItems);
// HTML collection returns a live collection (automatically updates itself).

//
// Add new todo item using Node Items:
const todoList2 = document.querySelector("#todoList2");
const items = todoList2.children; // .children changes from node list to HTML Collection.
console.log(items);

const newItem2 = document.createElement("li");
newItem2.classList.add("item2");
newItem2.innerText = "Item3";

const anotherItem2 = document.createElement("li");
anotherItem2.classList.add("item2");
anotherItem2.innerText = "Item4";

todoList2.appendChild(newItem2);
todoList2.appendChild(anotherItem2);

// update the amount of items we have
const todoNr2 = document.querySelector(".todo-nr2");
todoNr2.innerText = items.length; // Counts length & dynamically changes the number to 4
console.log(items); // updates to 4 list items

// using .children with a querySelector will turn the node list into a HTML Collection.
// This allows for dynamic updating using querySelectors.
