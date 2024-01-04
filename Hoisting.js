/**
 * Hoisting: Accessing variables and functions even before initialization.
 */

console.log(x); // undefined
// ReferenceError: x is not defined when line 19 is removed

console.log(greet); // function

console.log(a); // undefined
console.log(b); // undefined
// a and b are treated as variables while memory creation phase
// so initiallly {a: undefined, b: undefined ...}

greet(); // Hello
a(); // TypeError: a is not a function
b(); // TypeError: b is not a function

var x = 3;

/** 
let and const variables are hoisting but they are
hoisted differently than var keyword they are in
Temporal Dead Zone (not attached to window object)

Temporal Dead Zone is time 
when variable (with let or const) is hosted and 
till it get initialized with some value.
*/

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

/**
 * Undefined: Special keyword that is used to denote the variable before initalization /whose value is yet to set [some memory is allocated]
 * Not defined: Unable to locate a variable with _(some) name [no memory is allocated]
 */
