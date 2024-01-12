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
for (let i = 0; i<10; i++){
    f();
}

/**
 * Uses of Closure
 * - Module Design Pattern
 * - Currying
 * - Function like once
 * - memoize
 * - maintaining state in async world
 * - setTimeouts
 * - Iterators ...
 */