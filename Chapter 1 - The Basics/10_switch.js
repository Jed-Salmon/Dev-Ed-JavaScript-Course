// 14. Switch Statements

// Example 1
const text = "banana";
let fruitNr = 0;

switch (text) {
  case "banana":
    console.log("Wow, I love bananas too");
    fruitNr = 5;
    break; // Ignores code after this point.
  case "apple":
    console.log("I don't like apples!");
    fruitNr = 1;
    break;
  case "avocado":
    console.log("What fruit is this?");
    fruitNr = 0;
    break;
  default: {
    console.log("Please enter a fruit!");
  }
}

// A switch is used when comparing (===) multiple instances for a single variable.
// For this scenario it is a better replacement to using else if.

// Example 2 - Fruity Facts

let userInput = prompt("Tell me a fruit"); // Case sensitive. kiwi === Kiwi = False
let convertedValue = userInput.toLowerCase(); // User input from prompt gets converted to lowercase.
// let userInput = prompt('Tell me a fruit').toLowerCase; // Shorthand

switch (convertedValue) {
  case "kiwi":
    alert(
      "Kiwi is the first fruit discovered by native people of Papua New Guinea."
    );
    break;
  case "banana":
    alert(`Bananas are my pet Monkey diddy's favorite food.`);
    break;
  case "apple":
    alert("An apple a day keeps the doctor away.");
    break;
  default:
    alert("That fruit is unknown to me.");
    break;
}
