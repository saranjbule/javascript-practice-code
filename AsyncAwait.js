/**
 * Async & Await
 * - Async and Await are used to handled promises
 * - Async is a keyword which is used to created async function which always return promise
 * - Await keyword can only be used inside an async functions and infront of promise
 */

// always return promise
async function asyncFun() {
  return true; // it will automatically wrap return thing into Promise
}

async function asyncFun1() {
  return new Promise((res, rej) => res('done')); // it can return Promise directly (no wrapping of Promise)
}

console.log(asyncFun()); // Promise {<fulfilled>: true}
console.log(asyncFun1()); // Promise {<pending>}

// CORRECT
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved Promise');
  }, 5000);
});

// WRONG
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve('Resolved Promise'), 5000);
});

// In promise1, the resolve('Resolved Promise') is called immediately,
// not after the delay. This happens because resolve('Resolved Promise') is an immediate function call that returns undefined,
// and undefined is passed as the first argument to setTimeout. The code effectively becomes:

// setTimeout(undefined, 5000);

// This means the promise is resolved immediately with the value 'Resolved Promise',
// and the setTimeout does nothing after 5 seconds because it received undefined as the function to execute.

// old way
function handlePromiseOld() {
  promise.then((res) => console.log(res));
  console.log('in Old');
}

handlePromiseOld();
// in old
// Resolved Promise # after promise resolved

// new way
async function handlePromiseNew() {
  console.log('hello');
  const result = await promise;
  console.log(result);
  console.log('in new');
}

handlePromiseNew();
// hello # quickly
// Resolved Promise # after promise resolved
// in new # after promise resolved

// async function execution will stop/ suspended till promise is resolved (i.e., call stack gets empty)
// JS engine will wait for promise to get resolved and hold the function execution at await
// i.e., function execution context is pop out of call stack
// once resolved function continues from where it was left off

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('i am done');
  }, 10000);
});

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('i am done 2');
  }, 5000);
});

async function handlePromiseNew1() {
  console.log('hello');
  const result = await p;
  console.log(result);

  const result1 = await p;
  console.log(result1);
}

handlePromiseNew1();

// hello # quickly
// i am done # after 10sec
// i am done # just after above statement

async function handlePromiseNew1() {
  const result = await p;
  console.log(result);

  const result1 = await p1;
  console.log(result1);
}

// i am done # after 10sec
// i am done 2 # just after above statement

async function handlePromiseNew1() {
  const result = await p1;
  console.log(result);

  const result1 = await p;
  console.log(result1);
}

// i am done 2 # after 5sec
// i am done # after 5sec, total 10sec after

const API = 'https://api.github.com/users/saranjbule';

async function getData() {
  const response = await fetch(API);
  console.log(response, typeof response); // <Promise> Object
  const data = await response.json();
  console.log(data, typeof data); // <Json> Object
}

getData();

/**
 * handling erros
 * in promises - by attaching failure (.catch()) callbacks method
 * in async await - by using try catch block or
 *                  by attaching failure callback method to aysnc function as it returns promise object
 */

/**
* fetch(): This function sends a network request and returns a Promise,
*          that resolves to the Response object once the request completes.

* Response.json(): This method reads the response body to completion and parses it as JSON.
                   It returns a Promise that resolves to the parsed JSON data.

* Because parsing the response body can be time-consuming, especially for large responses,
* the .json() method is designed to return a Promise rather than blocking the main thread.
*/

/**
 * The AbortController interface
 * represents a controller object that allows you to abort one or more Web requests as and when desired.
 */