/**
 * When you create an array using new Array(8),
 * you create an array with a length of 8,
 * but the elements are not actually assigned any values.
 * This is known as a sparse array because it has "empty slots" that are not initialized.
 * In JavaScript, these uninitialized slots are different from slots that have been explicitly set to undefined.
 * Methods like map, forEach, reduce, and others do not execute their callback functions on these uninitialized slots.
 */

const arr1 = new Array(5).map((item, index) => index);
console.log(arr1); // [] length 5

const arr2 = new Array(5).fill(null).map((item, index) => index);
console.log(arr2); // [0, 1, 2, 3, 4]

const arr3 = Array.from({ length: 5 }, (item, index) => index);
console.log(arr3); // [0, 1, 2, 3, 4]

const arr4 = [...Array(5).keys()];
console.log(arr4); // [0, 1, 2, 3, 4]

const arr5 = [...Array(5).values()];
console.log(arr5); // [ undefined, undefined, undefined, undefined, undefined ]

const arr6 = [...Array(5).entries()];
console.log(arr6); // [[ 0, undefined ],[ 1, undefined ],[ 2, undefined ],[ 3, undefined ],[ 4, undefined ]]
