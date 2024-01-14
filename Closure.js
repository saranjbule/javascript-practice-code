/**
 * Closure
 * - A function binds/ bundles (enclosed) together with it's lexical enviornment.
 * - Function along with its lexical scope forms a closure.
 */

function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  y();
}

x();

function x() {
  let a = 10;
  function y() {
    console.log(a);
    a += 1;
  }
  return y; // closure is returned (function + lexical scope)
}

const f = x();
console.log(f); // function y

// function x no longer exists but function y still remember it's lexical scope
for (let i = 0; i < 10; i++) {
  f();
}

/**
 * Disadvantages of Closure
 * - over consumption of memory
 * - varaible defined inside the closure are not automatically garbage collected which result in memory leaks
 * - but some garbage collector automatically removed unreferenced/ unused variables
 */


/**
 * Uses of Closure
 * - Module Design Pattern
 * - Currying
 * - data privacy/ data hiding/ encapsulation
 * - Function like once
 * - memoize
 * - maintaining state in async world
 * - setTimeouts
 * - Iterators ...
 */

// Data privacy

// Function 1:  Problem : varialbe a is global scope so anyone can alter variable a
var a = 10; // global scope
function increment() {
  a++;
  console.log(a);
}

increment(); // 11
increment(); // 12

// Function 2: Solution
function y() {
  var count = 0; // function scope
  return function z() {
    count++;
    console.log(count);
  };
}

// console.log(count); // Reference Error: count is not defined

counter = y();
counter(); // 1
counter(); // 2
counter(); // 3

counter2 = y();
counter2(); // 1
counter2(); // 2
