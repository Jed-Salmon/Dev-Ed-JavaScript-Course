// 18. Guessing Game Final

// Plan:
// Generate a random number
// Give the user the ability to guess
// If they guess wrong, ask again (hint).
// If they guess right, announce they've won.

function guessGame() {
  // let randomNr = Math.random() * 10;
  // let fixedNr = Math.ceil(randomNr);
  let randomNr = Math.ceil(Math.random() * 10); // Shorthand for above.
  // This number generator is static, as it's only built once.
  let Guess;

  do {
    //  let randomNr = Math.ceil(Math.random() * 10); // Would generate a new number with each loop.
    guess = prompt("Guess a number between 1-10");
    console.log(guess, randomNr);
    if (randomNr > guess) {
      alert("You guessed too low");
    } else if (randomNr < guess) {
      alert("You guessed too high");
    }
  } while (guess != randomNr); // If guess is not equal, continue loop.
  alert("You Picked Correct!"); // If guess is equal, run alert.
}

// Declared the variable 'guess' inside the entire functions code block.
// If declared inside the do statement, the variables scope would only remain inside the do's code block.
// This would mean the while statement would not be able to use the variable 'guess'.

guessGame();
