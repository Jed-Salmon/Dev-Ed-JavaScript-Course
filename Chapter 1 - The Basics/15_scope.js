// 19. Scope

// Global Scope
let food = "apple";
let fruits = 5;
var x = 10;

function store() {
  // Function Scope
  let food = "banana";
  let fruits = 50;
  console.log(food, fruits);
  var x = 5;
}

store(); // banana 50
console.log(food, fruits); // apple 5

// Block Scope
for (let fruits = 0; fruits < 2; fruits++) {
  console.log(fruits);
}

for (var x = 0; x < 2; x++) {
  console.log(x);
}

// var overrides the global variable, despite being altered at block scope
console.log("Global" + x);
