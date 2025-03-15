const quickSort = (si, ei) => {
  if (si >= ei) return;

  const pivot = pivotSelection(si, ei);

  quickSort(si, pivot - 1);
  quickSort(pivot + 1, ei);
};

const pivotSelection = (si, ei) => {
  let pivot = Math.floor(Math.random() * ei) + si;
  const pEle = arr[pivot];

  for (let i = si; i <= ei; i++) {
    if (arr[i] < pEle) pivot++;
  }

  [arr[si], arr[pivot]] = [arr[pivot], arr[si]];

  while (si < pivot && ei > pivot) {
    if (pEle > arr[si]) {
      si++;
    } else if (pEle < arr[ei]) {
      ei--;
    } else {
      [arr[si], arr[ei]] = [arr[ei], arr[si]];
      si++;
      ei--;
    }
  }

  return pivot;
};

const arr = [3, 2, 1];
quickSort(0, arr.length - 1);
console.log(arr);
