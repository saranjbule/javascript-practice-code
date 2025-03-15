/**
 * Javascript is
 * - loosely typed
 * - weakly typed
 * - dynamically typed
 * - synchronous
 * - single threaded language
 */

// Loosely - a variable can hold multiple types of data type
// varialbe mutation

var x;
console.log(x, typeof x); // undefined undefined

x = 'saranj';
console.log(x, typeof x); // saranj string

x = [1, 2];
console.log(x, typeof x); // [1, 2] object

x = 10;
console.log(x, typeof x); // 10 number

x = undefined; // Bad practice
console.log(x, typeof x); // undefined undefined

x = null;
console.log(x, typeof x); // null object

// Weakly - a variable can change one type to another
// Type coercion

// Implicit Coercion
a = 10 + '0';
console.log(a, typeof a); // 100 string

a = a - 50;
console.log(a, typeof a); // 50 number

// Explicit Coercion
a = '';
a = Number(a);
console.log(a, typeof a); // 0 number

/**
 * JavaScript is a dynamically typed language.
 * In a dynamically typed language,
 * the type of a variable is checked during run-time
 * in contrast to a statically typed language,
 * where the type of a variable is checked during compile-time.
 */
