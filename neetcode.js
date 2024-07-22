/**
 * Currying
 */

function curry(fn) {
  let param = [];

  function curried(...args) {
    param = [...param, ...args];

    if (fn.length === param.length) {
      res = fn(...param);
      param = [];

      return res;
    } else {
      return curried;
    }
  }

  return curried;
}

const add = (a, b, c) => {
  return a + b + c;
};

const c = curry(add);
console.log(c(1)(5)(10), 'result'); // 16 'result'

console.log(c(1, 3)(10), 'result'); // 14 'result'

console.log(c(1)(4, 10), 'result'); // 15 'result'
