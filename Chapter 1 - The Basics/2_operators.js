// 5. Operators

let inbox = 10;
let inboxPlus = 10;
let inboxMinus = 10;
let inboxDivide = 10;
let inboxMultiply = 10;
let inboxExponentiation = 10;
let inboxModulus = 10;

console.log(inboxPlus + 10);
console.log(inboxMinus - 5);
console.log(inboxDivide / 5);
console.log(inboxMultiply * 5);
console.log(inboxExponentiation ** 3); // 10 * 10 * 10
console.log(inboxModulus % 3); // Remainder

// Shorthand notation
console.log(inbox++); // +1
console.log(inbox--); // -1
console.log((inbox += 20)); // +20
console.log((inbox -= 10)); // -10
console.log((inbox *= 10)); // x10
console.log((inbox /= 10)); // ÷10

// B I D M A S
// Brackets, Indices, Division, Multiplication, Addition, Subtraction. >>

let result = 5 * (10 - 3) ** 2;
//order      ^3^    ^1^     ^2^

console.log(result); // Returns 245