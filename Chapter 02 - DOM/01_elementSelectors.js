// 3. Selecting the DOM

// Gets all h2 elements in the HTML
const headers = document.getElementsByTagName("h2"); // plural (all)
const list = document.getElementsByClassName("item"); // plural
const button = document.getElementById("submit"); // singular

console.log(headers); // Returns HTML Collection with all h2 in the html
console.log(list.length); // Returns HTML Collection with all list items. Length returns 5
console.log(button); // Returns only the first element with id of "submit"

// Query Selector can be used to select any type of element (class, id)
const headers1 = document.querySelector("h2"); // .querySelector only returns first element it finds on the page
const headersAll = document.querySelectorAll("h2"); // Returns All querySelectors

console.log(headers1);
console.log(headersAll); // Returns NodeList

const list1 = document.querySelector(".item");
const listAll = document.querySelectorAll(".item");

console.log(list1);
console.log(listAll);

const buttonAll = document.querySelectorAll("#submit");
console.log(buttonAll);

// Specify
const listHeader = document.querySelector("h4.item"); // select only h4 with class of item
const listLink = document.querySelector("#list a");

console.log(listHeader);
console.log(listLink);
