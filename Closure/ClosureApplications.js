/**
 * Module design pattern
 * Module Design Pattern to Encapsulate private variables and methods.
 * This helps in achieving data privacy and preventing them from being accessed from outside the module.
 */

const module = () => {
  // private attribute
  const a = 10;

  // private method
  const c = (x) => {
    console.log('c', x);
  };

  // public attribute
  const b = 20;

  // public method
  const d = () => {
    c(a); // getter/ accessor
    console.log('d');
  };

  return { b, d };
};

const m = module();
console.log(m); // {b: 20, d: f}
console.log(m.b); // 20
console.log(m.a); // undefined
console.log(m.d()); // d

/**
 * Currying
 * Currying in JavaScript transforms a function with multiple parameters
 * into a nested series of functions, each taking a single parameter.
 *
 * Advantages
 * - Currying helps you avoid passing the same variable multiple times
 * - it helps in creating a higher order function
 * */

const multiply = (a, b, c) => a * b * c;

console.log(multiply(10, 20, 30)); // 6000

const m1 = (a) => {
  const m2 = (b) => {
    const m3 = (c) => {
      return a * b * c;
    };
    return m3;
  };
  return m2;
};

const m2 = m1(10);
const m3 = m2(20);
const ans = m3(40);

console.log(ans); // 8000
console.log(m1(100)(10)(50)); // 50000

/**
 * Function run once
 */
const onceFuc = () => {
  let ran = true;
  return () => {
    if (ran) {
      console.log('Done');
      ran = false;
    } else {
      console.log('Already Done');
    }
  };
};

const oF = onceFuc();
oF();
oF();

/**
 * Data privacy/ Data hiding
 */

// Function 1: Problem
// variable `a` is in global scope so anyone can alter variable `a`
// which result in unexpected outcome
var a = 10; // global scope
function increment() {
  a++;
  console.log(a);
}

increment(); // 11
a = 20;
increment(); // 21

// Function 2: Solution
function y() {
  var count = 0; // function scope
  return function z() {
    count++;
    console.log(count);
  };
}

// console.log(count); // Reference Error: count is not defined
// count is not accessible outside of function y (at globally scope)

counter = y();
counter(); // 1
counter(); // 2
counter(); // 3

counter2 = y();
counter2(); // 1
counter2(); // 2

/**
 * Memoization
 */

const memoization = () => {
  const memo = {};

  const checkMemo = (k, v) => {
    if (memo[k]) {
      memo[k] += v;
    } else {
      memo[k] = v;
    }
    console.log(memo);
  };

  return checkMemo;
};

const cM = memoization();
cM('a', 1); // {'a': 1}
cM('x', 10); // {'a': 1, 'x': 10}
cM('a', 3); // {'a': 4, 'x': 10}

/**
 * Maintaining State in Async World
 */

const asynCounter = function () {
  let count = 0;
  return () => {
    const interval = setInterval(() => {
      if (count < 5) {
        console.log(count++);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };
};

starCounter = asynCounter();
starCounter();

/**
 * setTimeout | Maintaining State in Async world
 */
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
