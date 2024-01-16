/**
 * Data privacy/ Data hiding/ Encapsulation
 * */

// Function 1:  Problem : variable a is global scope so anyone can alter variable a
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

/**
 * Currying
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