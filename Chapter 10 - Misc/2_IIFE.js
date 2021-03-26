// 2. IIFE (Immediately Invoked Function Expression)

(function hello() {
  console.log("how are you?");
})();

// wrap entire function in parenthesis
// invoke the function at the end (before semicolon)

// Typically used in libraries to avoid global scope variables resulting in name collision
(function library() {
  // encapsulates logic without affecting outer variables
  // using the variable "animation" won't result in an error as animation is function scoped within the IIFE
  const animation = "0.1 ease";
})();

const animation = "can't break this";
