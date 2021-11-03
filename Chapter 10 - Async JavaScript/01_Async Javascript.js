// Async code example

const items = [1, 2, 3, 4, 5];

console.log("Start");

items.forEach((item) => {
  console.log(item);
});

setTimeout(() => {
  console.log("We are in the timeout");
}, 2000);

console.log("Finish");

// setTimeout or eventListener (click) gets passed to the Web Apis.
// This keep track of the time delay or when a user clicks for example.
// Otherwise javascript would need to wait for the delay/click in order to parse the following line of code.

// Async must be a callback function. However callbacks aren't always Asynchronous (forEach example).
