var isValidSudoku = function(board) {
  let hashMap = new Map();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let value = board[i][j];

      if (value !== 0) {
        let row = `row${i}:${value}`;
        let col = `col${j}:${value}`;
        let box = `row:${Math.floor(i / 3)} col: ${Math.floor(
          j / 3
        )} :  ${value}`;

        if (hashMap.has(row) || hashMap.has(col) || hashMap.has(box)) {
          return false;
        }
        hashMap.set(row, true);
        hashMap.set(col, true);
        hashMap.set(box, true);
      }
    }
  }

  return true;
};

let test = [
  [5, 3, 1,6, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log(isValidSudoku(test))
