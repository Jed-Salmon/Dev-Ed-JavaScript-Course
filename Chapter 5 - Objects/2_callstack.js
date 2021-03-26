//  2. Callstack

// Global Execution Context creates the scope chain during the creation process.
// JavaScript needs to know where your variables and function have access.

function sayHi() {
  console.log(`hello my name is ${name}`);
  changeName(); // Creates a tertiary execution context which stacks above sayHi();
  console.log(`sayHi is finished`);
}

function changeName() {
  name = "Bobby";
  console.log(`we changed it to ${name}`);
  console.log(`changeName is finished`);
} // changeName execution context gets popped off
// sayHi(); is now back at the top of the call stack.

let name = "dev jed";

// Invoking a function creates its own execution context using the keyword "this"
sayHi(); // sayHi(); execution context stacks above global();

console.log(`We are done with the code`);

// global call stack runs and invokes sayHi();
// sayHi() function is called, which runs line sevens console log.
// changeName(); on line five is invoked and gets pushed to the top of the call stack.
// changeName(); finishes running and gets popped off the call stack.
// sayHi(); is now back at the top of the call stack, finishes running and is popped off.
// Lastly global(); is all that is left in the call stack and runs the final console log.

// The most important takeaway is:
// Every time you invoke a function, a new execution context gets created.
// Once the execution context is created, that will be the one that runs.
// If we invoke another function within that execution context, another execution context will be created and that will be the one to run.
