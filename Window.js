/**
 * At runtime, every JS file (even empty js file) creates
 * 1. GEC (global execution context)
 * 2. Global Object (Window (in context of browser))
 * 3. this variable (pointing/ referencing to Window object)
 */

var x = 1;
const y = 2;
let z = 3;

function f() {
  var t = 4;
}

console.log(this); // window object
console.log(window); // window object

console.log(this === window); // true

// variable declared using the var keyword in the global scope (outside of any function)
// the variable becomes a property of the global object,
// which is often the window object in a browser environment.

console.log(this.x); // 1
console.log(window.x); // 1

// window object is available globally
console.log(x); // 1
console.log(t); // ReferenceError: t is not defined

// let & const variable are not attachted to window object
console.log(window.y); // undefined
console.log(window.z); // undefined