/**
 * Hoisting: Accessing variables and functions even before initialization.
 */

console.log(x); // undefined
// ReferenceError: x is not defined when line 19 is removed

console.log(greet); // function

console.log(a); // undefined
console.log(b); // undefined
// a and b are treated as variables while memory creation phase
// so initiallly the are {a: undefined, b: undefined ...}

greet(); // Hello
a(); // TypeError: a is not a function
b(); // TypeError: b is not a function

var x = 3;

// let and const do not support hoisting

console.log(y); // ReferenceError: Cannot access 'y' before initialization
console.log(z); // ReferenceError: Cannot access 'z' before initialization

const y = 3;
let z = 3;

// function declaration
function greet() {
  console.log("Hello");
}

// Arrow function
var a = () => {
  console.log("hi from a");
};

// function expression
var b = function () {
  console.log("hi from b");
};
