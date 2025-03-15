const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(1)(2)(3)(4)(5)());

const sum1 = (a) => (b) => b ? sum(a + b) : a;

console.log(sum1(1)(2)());
console.log(sum1(1)(2)(3)());
console.log(sum1(1)(2)(3)(4)());
