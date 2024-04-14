/**
 * this substitution
 * - Whenever the value of this keyword is undefined or null in non-strict mode
 * - then value of this gets replaced with global object
 */

"use strict";

console.log(this);
// strict => Global Object (Window in context of browsers)
// non-strict mode => Global object

// function declaration
function x() {
  // value of this keyword is defined by how the function is called (runtime binding)
  console.log(this);
}

x();
// strict => undefined
// non-strict mode => Global object

window.x();
// strict => Global Object
// non-strict mode => Global object

// function expresion
const fe = function () {
  console.log(this);
};

fe();
// strict => undefined
// non-strict mode => Global object

// window.fe() => ERROR // const are not attached to window object

var fe2 = function () {
  console.log(this);
};

fe2();
// strict => undefined
// non-strict mode => Global object
window.fe2();
// strict => Global object

/**
 * Arrow function don't provide their own this binding
 * they retains the value of this from their enclosed lexical context
 */

// arrow function
const af = () => {
  console.log(this);
};

af();
// strict => Global object
// non-strict mode => Global object

/**
 * Function inside object are called as method
 */

// this inside object method
const y = {
  a: "a",

  b: function () {
    console.log(this); // y
  },

  c: () => {
    console.log(this); // window
  },

  d: function () {
    console.log(this); // y
    const d1 = () => console.log(this); // y
    d1();
  },

  e: () => {
    console.log(this); // window
    const e1 = () => console.log(this); // window
    e1();
  },
};

y.b();
y.c();
y.d();
y.e();
