// 3. Closures

// outer function
function user() {
  const name = "Jed";
  // inner function
  const displayName = function (greeting) {
    console.log(greeting + name);
  };
  return displayName;
}

const say = user();

say("How are ya? ");

// when you have a function with an inner function
// even though the outer function has finished running
// the inner function still has access to the outer function variables
