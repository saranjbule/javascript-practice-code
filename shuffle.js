const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [];
const arr3 = [1];

Array.prototype.shuffle = function () {
  // fisher yates shuffle algorithm
  let l = this.length - 1; // last index

  while (l > 0) {
    randomIndex = Math.floor(Math.random() * l); // generate random number in range of 0 (inclusive) to l (exclusive)
    [this[randomIndex], this[l]] = [this[l], this[randomIndex]];
    l -= 1;
  }
};

arr1.shuffle();
console.log(arr1);

arr2.shuffle();
console.log(arr2);

arr3.shuffle();
console.log(arr3);
