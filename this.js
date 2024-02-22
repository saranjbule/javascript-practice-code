'use strict'

console.log(this); 
// strict => Global Object (Window in context of browsers)
// non-strict mode => Global object

// function declaration
function x() {
  // value of this keyword is defined by how the function is called
  console.log(this);
}

x();
// strict => undefined
// non-strict mode => Global object

window.x();
// strict => Global Object (Window in context of browsers)
// non-strict mode => Global object

// function expresion
const fe = function () {
  console.log(this);
}

fe();
// strict => undefined
// non-strict mode => Global object

// window.fe() => ERROR // const are not attached to window object

// arrow function
const af = () => {
  console.log(this);
}

af();
// strict => Global object
// non-strict mode => Global object

/**
 * this substitution
 * - if value of this is undefined or null in non-strict mode
 * - then value of this gets replaced with global object
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

/**
 * Arrow function do not provide their own this binding
 * they retain the value of their enclosed lexical context
 */
