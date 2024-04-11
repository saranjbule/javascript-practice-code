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
  return new Promise((res, rej) => res("done")); // it can return Promise directly (no wrapping of Promise)
}

console.log(asyncFun()); // Promise
console.log(asyncFun1()); // Promise

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved Promise");
  }, 5000);
});

// old way
function handlePromiseOld() {
  promise.then((res) => console.log(res));
  console.log("in Old");
}

handlePromiseOld();
// in old
// Resolved Promise

// new way
async function handlePromiseNew() {
  console.log("hello");
  const result = await promise;
  console.log(result);
  console.log("in new");
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
    resolve("i am done");
  }, 10000);
});

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am done 2");
  }, 5000);
});

async function handlePromiseNew1() {
  console.log("hello");
  const result = await p;
  console.log(result);

  const result1 = await p;
  console.log(result1);
}

handlePromiseNew1();

// hello # quickly
// i am done # after 10sec
// i am done # with above msg after 10sec

async function handlePromiseNew1() {
  const result = await p;
  console.log(result);

  const result1 = await p1;
  console.log(result1);
}

// i am done # after 10sec
// i am done 2 # just after that

async function handlePromiseNew1() {
  const result = await p1;
  console.log(result);

  const result1 = await p;
  console.log(result1);
}

// i am done 2 # after 5sec
// i am done # after 5sec, total 10sec after

const API = "https://api.github.com/users/saranjbule";

async function getData() {
  const respose = await fetch(API);
  console.log(respose)
  const data = await respose.json();
  console.log(data);
}

getData();
// without await at line 108 promise
// with await at line 108 json data

/**
 * handling erros
 * in promises - by attaching failure (.catch()) callbacks
 * in async await - by using try catch block or by attaching failure callback to aysnc function returned promise object
 */
