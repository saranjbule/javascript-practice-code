/**
 * Closure
 * - A function binds/ bundles/ enclosed together with it's lexical enviornment.
 * - Function along with its lexical scope forms a closure.
 */

function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  y(); // closure
}

x(); // 10

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
  f(); // 10 11 12
}

/**
 * Disadvantages of Closure
 * - over consumption of memory
 * - varaible defined inside the closure are not automatically garbage collected which result in memory leaks
 * - but some garbage collectors automatically removed unreferenced/ unused variables
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