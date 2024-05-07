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
// (i.e., variable declare inside function scope of x)
for (let i = 0; i < 10; i++) {
  f(); // 10 11 12
}

/**
 * Disadvantages of Closure
 * - over consumption of memory
 * - varaible defined inside the closure are not automatically garbage collected
 * - which result's in memory leaks
 */

/**
 * Uses of Closure
 * - 1 Module Design Pattern
 * - 2 Currying
 * - 3 data privacy/ data hiding/ encapsulation
 * - 4 Function like once
 * - 5 memoize
 * - 6 maintaining state in async world
 * - 7 setTimeouts
 * - 8 Iterators ...
 */
