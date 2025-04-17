function setTimeoutPoly(callback, duration) {
  let start = Date.now();
  const end = start + duration;

  while (start <= end) {
    start = Date.now();
  }

  callback();
}

function clearTimeoutPoly() {}

setTimeoutPoly(() => console.log('heelo'), 5000);
