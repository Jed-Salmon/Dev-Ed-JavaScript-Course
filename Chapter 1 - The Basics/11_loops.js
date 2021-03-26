// 15. For Loop
// Repeat or iterate sections of code over and over again.

for (let i = 0; i < 100; i++) {
  // Curly braces signify a 'code block'
  //Run Code
  if (i === 98) {
    console.log("98 Represent");
    continue; // Skips over 98
    // break; // Stops at 98
  }
  console.log(i);
} // No semi colon needed with loops.

const text = "Jed";

for (let i = 0; i < text.length; i++) {
  console.log(i); // Returns an string count of 2 (3 letters counting from 0)
}

const texts = [
  "Array Item 1",
  "Array Item 2",
  "Array Item 3",
  "Array Item 4",
  "Array Item 5",
];

for (let i = 0; i < texts.length; i++) {
  console.log(texts[i]); // Returns each array name in the form of a string.
}

for (let i = 0; i < texts.length; i++) {
  console.log(i); // Returns an array count of 4 (5 items counting from 0)
}

// An Iteration is one cycle through an array or some data.
// So once the code block {} has been performed, that is one iteration.
