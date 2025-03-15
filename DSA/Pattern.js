let ip = 4;
let r = 2 * ip - 1;

for (let i = 0; i < r; i++) {
  let row = '';
  for (let j = 0; j < r; j++) {
    row += ip - Math.min(i, j, r - i - 1, r - j - 1) + ' ';
  }
  console.log(row);
}

/**
4 4 4 4 4 4 4 
4 3 3 3 3 3 4 
4 3 2 2 2 3 4 
4 3 2 1 2 3 4 
4 3 2 2 2 3 4 
4 3 3 3 3 3 4 
4 4 4 4 4 4 4 
*/

ip = 4;
r = 2 * ip - 1;
for (let i = 0; i < r; i++) {
  let row = '';
  for (let j = 0; j < r; j++) {
    row += Math.min(i, j, r - i - 1, r - j - 1) + ' ';
  }
  console.log(row);
}

/**
0 0 0 0 0 0 0 
0 1 1 1 1 1 0 
0 1 2 2 2 1 0 
0 1 2 3 2 1 0 
0 1 2 2 2 1 0 
0 1 1 1 1 1 0 
0 0 0 0 0 0 0 
 */