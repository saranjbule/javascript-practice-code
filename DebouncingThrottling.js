/**
 * Debouncing and Throttling
 *
 * These are optimizing techniques to increase the performance of web app
 *
 * It allows to control the rate at which code is executed,
 * and reduce the number of times it is called
 * (ex reducing the number of API calls)
 *
 * Debounce occurs when the difference between two events are more than a specific time delay (User Pattern)
 *
 * Throtting occurs after a regular time interval
 *
 * Examples-
 *  - search bar : Debouncing (make api call after each pause)
 *  - shooting game : throttling (for each reload after fixed time)
 */

let t1 = 0;

const getAPI = (val) => {
  console.log(val);
};

const getResult = (e) => {
  const t2 = new Date();

  if (t2 - t1 > 500 && t1 !== 0) {
    getAPI(e.target.value);
  }

  t1 = t2;
};

// Debouncing
const getResult2 = debounce(getAPI, 500);

const ip = document.querySelector("#ip");
ip.addEventListener("keyup", (e) => {
  const query = e.target.value;
  // getResult2(query);
  getResult3(query);
});

function debounce(func, dealy) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, dealy);
  };
}

// Throttling
const getResult3 = throttling(getAPI, 1000);

function throttling(func, dealy) {
  let flag = true;
  return function (...args) {
    if (flag) {
      flag = false;
      func(...args);
      setTimeout(() => {
        flag = true;
      }, dealy);
    }
  };
}
