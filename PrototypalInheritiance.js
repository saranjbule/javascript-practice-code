/**
 * Prototypes are the mechanism by which JavaScript objects inherit features from one another.
 */

const arr = [1, 2, 3];

const obj = {
  name: 'saranj',
  age: 24,
  getName: function () {
    console.log(this.name, this.age);
  },
};

function f() {
  const a = 1;
  this.b = 2;
  console.log('hello from f', a, this.b);
}

console.log(arr.__proto__); // prototype of Array
console.log(Array.prototype); // prototype of Array

// prototype chaining
console.log(arr.__proto__.__proto__); // prototype of Object | As everyting is object in JS
console.log(arr.__proto__.__proto__.__proto__); // null

console.log(obj.__proto__); // prototype of Object
console.log(Object.prototype); // prototype of Object
console.log(obj.__proto__.__proto__); // null

console.log(arr.__proto__.__proto__ === obj.__proto__); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true

console.log(f.__proto__); // prototype of Function
console.log(Function.prototype); // prototype of Function
console.log(f.__proto__.__proto__); // prototype of Object
console.log(f.__proto__.__proto__.__proto__); // null

const obj2 = {
  name: 'x',
};

// Bad Practice : Never do this
obj2.__proto__ = obj;

console.log(obj2.__proto__); // prototype of obj1
obj2.getName(); // x 24

console.log(obj2.__proto__.__proto__); // prototype of Object
console.log(obj2.__proto__.__proto__.__proto__); // null
