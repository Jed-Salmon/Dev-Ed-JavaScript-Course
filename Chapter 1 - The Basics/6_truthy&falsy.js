// 10. Truthy & Falsy

// FALSE, 0, '', null, undefined, NaN
// Everything else will return Truthy

const powerOn = 1;
const name = "";

if (powerOn) {
  console.log("This value is truthy"); /* Returns Truthy */
} else {
  console.log("This value is falsy");
}

if (name) {
  console.log("This value is truthy");
} else {
  console.log("This value is falsy"); /* Returns falsy */
}

if (0) {
  console.log("This value is truthy");
} else {
  console.log("This value is falsy"); /* Returns falsy */
}
