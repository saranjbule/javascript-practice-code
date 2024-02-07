"use strict";

console.log(this); // Global Object (Window in context of browsers) in strict as well as non-strict mode

function x() {
  console.log(this);
}

x(); // Global Object in non-strict mode | undefined in strict mode

// value of this keyword is defined by how the function is called
window.x(); // Global Object in non-strict mode | Global Object in strict mode

/**
 * this substitution
 * - if value of this is undefined or null in non-strict mode then
 * - value of this gets replaced with global object
 */

// this inside object method

const y = {
  a: "a",
  b: function () {
    console.log(this);
  },
  c: () => {
    console.log(this);
  },
  d: function () {
    console.log(this);
    const d1 = () => console.log(this);
    d1();
  },
  e: () => {
    console.log(this);
    const e1 = () => console.log(this);
    e1();
  },
};

y.b(); // y
y.c(); // window
y.d(); // y
y.e(); // window

/**
 * Arrow function do not provide their own this binding
 * they retain the value of their enclosed lexical context
 */
