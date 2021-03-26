// 4. Bind, Call, Apply
// On every function you have access to these methods

// modify and control this keyword using
const person = {
  firstName: "Jed",
  lastName: "Salmon",
  getName() {
    console.log(this.firstName + this.lastName);
  },
};

function registerUser(country, lang) {
  // Additional functionality...
  console.log(this);
  this.getName(); // this works after applying bind, call or apply
  console.log(`My country is ${country}, and my language is ${lang}`);
}

// BIND
const register = registerUser.bind(person); // pass in an object
// The object you pass in, binds the keyword 'this' to said object.

register("England", "English"); // registerUser function now applies to the person object.

// CALL
registerUser.call(person, "England", "English");
// first argument is the pointer object, second is any parameters on registerUser.
// When using call, we are not saving it to a variable, we are immediately invoking it.

// APPLY
registerUser.apply(person, ["England", "English"]);
// The difference is that you instead pass an array of arguments.

// SUMMARY:
// All three methods allow your to change the context of the keyword 'this'.
// For CALL & APPLY you invoke it off the bat. For BIND we referencing it in a variable.
// For BIND you pass in the arguments when invoking the referenced variable.
// For CALL & APPLY you point to the specified object, as well as pass in the arguments.
// BIND uses a variable, meaning it can be called later instead of invoked instantly (call & apply).
