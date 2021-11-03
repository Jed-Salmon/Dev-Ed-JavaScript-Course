// 4. Collections and Nodelists

const collectionItems = document.getElementsByClassName("item");
const nodeItems = document.querySelector("#todoList"); // shows comments & plain text in console
const nodeItems2 = document.querySelectorAll(".item");

console.log(nodeItems.childNodes); // Method looks at the nodes that the parent (todoList) has.
console.log(nodeItems.children); // Only shows the node elements (switches to HTML Collection).

// HTML collection can only hold node elements
// Node list can hold node elements, node texts and node comments.

for (let item of collectionItems) {
  console.log(item); // loops over and logs each list item
}

// Node lists can use forEach to loop over, but HTML collections can not.
nodeItems2.forEach(function (item) {
  console.log(item);
});

//
// Add new to-do item using HTML Collection:
const todoList = document.getElementById("todoList"); // parent element

const newItem = document.createElement("li"); // create new element by tag (li).
newItem.classList.add("item"); // add a class
newItem.innerText = "Item3"; // add text

const anotherItem = document.createElement("li"); // create new element by tag (li).
anotherItem.classList.add("item"); // add a class
anotherItem.innerText = "Item4"; // add text

todoList.appendChild(newItem); // Takes new list item and append it to the parent.
todoList.appendChild(anotherItem); // Takes new list item and append it to the parent.

// Update the amount of items we have (automatic)
const todoNr = document.getElementsByClassName("todo-nr")[0];
todoNr.innerText = collectionItems.length; // counts the number of items & displays the count.
console.log(collectionItems); // HTML collections automatically update themselves.

//
// Add new todo item using Node Items:
const todoList2 = document.querySelector("#todoList2"); // parent element

const newItem2 = document.createElement("li"); // create new element by tag (li).
newItem2.classList.add("item2"); // add a class
newItem2.innerText = "Item3"; // add text

const anotherItem2 = document.createElement("li"); // create new element by tag (li)
anotherItem2.classList.add("item2"); // add a class
anotherItem2.innerText = "Item4"; // add text

todoList2.appendChild(newItem2); // this works (gets pushed to the html)
todoList2.appendChild(anotherItem2); // this works (gets pushed to the html)

// update the amount of items we have
const todoNr2 = document.querySelector(".todo-nr2");
todoNr2.innerText = nodeItems2.length;
console.log(nodeItems2); // Console only shows 2 list item elements

// When we use query selector (node item) it becomes static.
// Meaning JavaScript doesn't update itself if we push in a new element.

// Take a look at the file (dynamic_nodeList) to see how to turn a querySelector dynamic using .children
