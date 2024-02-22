/**
 * Data privacy/ Data hiding/ Encapsulation
 * */

// Function 1:  Problem : variable a is global scope so anyone can alter variable a which result in unexpected outcome
var a = 10; // global scope
function increment() {
  a++;
  console.log(a);
}

increment(); // 11
a = 20;
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

/**
 * Currying
 * Currying in JavaScript transforms a function with multiple parameters
 * into a nested series of functions, each taking a single parameter.
 * Currying helps you avoid passing the same variable multiple times,
 * and it helps you create a higher order function.
 * */

const multiplyer = (a) => {
  return (b) => {
    console.log(a * b);
  };
};

const multiply2 = multiplyer(2);
const multiply3 = multiplyer(3);

multiply2(10);
multiply3(10);

multiplyer(4)(8);
