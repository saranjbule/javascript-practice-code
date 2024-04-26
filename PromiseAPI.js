/**
 * Promise.all()
 * - to make multiple parallel API calls and get the result
 * - to handle multple Promises together
 * - take array of promises (iterable) as input
 * - fail fast technique | ALL or NONE
 */

// r1, r2, r3 are result of promises p1, p2, p3
// p1 -> r1 (5s), p2 -> r2 (2s), p3 -> r3 (8s)

// to get the final result array total time will be 8s max(5s, 2s, 8s)
// as Promise.all() wait for all of them to resolved

// if any one of the promise gets rejected in-between Promise.all() will throws the error of that promise instantly
// it will not wait for other promises to get their result (settle [resolved or rejected])

// whenever the promises are executed we can not terminate the promise in between, once initiated
// other concept - cancelable promises

/**
 * Promise.allSettled()
 * - same as Promise.all() but in case of failure of any of the promise
 * - wait for all the promises to settle irrespective of success or failure
 *
 * - if p1 gets failed Promise.allSettled() will wait for 8s max(5s, 2s, 8s) and result will be [err, r2, r3]
 * - i.e., resultArray.length === promiseArray.length
 */

/**
 * Promise.race()
 * - fastest one first
 * - first one to get settle whether ressolved or rejected
 * - fastest one to gets execute return to the result set (i.e., p2)
 */

/**
 * Promise.any()
 * - Similar to Promise.race() but seeking for first success
 * - First one to ressolved first gets return to the result set
 * - if every promise get rejected then result will be AGGREGATE ERROR i.e., [err1, err2, err3] (err.errors)
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("fullfiled P1");
    reject("Rejected P1");
  }, 1000);
});

const p2 = new Promise((resolved, reject) => {
  setTimeout(() => {
    // resolved("fullfiled P2");
    reject("Rejected P2");
  }, 3000);
});

const p3 = new Promise((resolved, reject) => {
  setTimeout(() => {
    // resolved("fullfiled P3");
    reject("Rejected P3");
  }, 5000);
});

Promise.all([p1, p2, p3])
  .then((p) => console.log(p))
  .catch((p) => console.log(p));

Promise.allSettled([p1, p2, p3])
  .then((p) => console.log(p))
  .catch((p) => console.log(p));

Promise.race([p1, p2, p3])
  .then((p) => console.log(p))
  .catch((p) => console.log(p));

Promise.any([p1, p2, p3])
  .then((p) => console.log(p))
  .catch((p) => console.log(p));
