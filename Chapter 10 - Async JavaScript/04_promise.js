// promise is an object that gives us back either the result of an asynchronous operation or a failure of a asynchronous operation.

// Creating the promise:
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got the user");
    resolve({ user: "jed" });
    reject(new Error("User is not logged in"));
  }, 2000);
});

// Consuming the promise:
promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err.message));
