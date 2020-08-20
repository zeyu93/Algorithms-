// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const spiral = n => {
  let result = [];
  while (n > 0) {
    result.push([]);
    n--;
  }
  let startRow = 0;
  let endRow = result.length - 1;
  let startCol = 0;
  let endCol = result.length - 1;
  let counter = 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter;
      counter++;
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      result[startCol][i] = counter;
      counter++;
    }
    startCol++;
  }
  console.log(result);
};

spiral(4);

function matrix(n) {
  let result = [];
  //iniitalizing result array with empty sub arrays, length = n
  for (i = 0; i < n; i++) {
    result.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let startRow = 0;
  let endColumn = n - 1;
  let endRow = n - 1;
  //a while loop so that the start/End C, and start/End Row is not equal so it keeps going

  while (startRow <= endRow && startColumn <= endColumn) {
    //loop through top row of matrix
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    // first row done, move startRow down
    startRow++;

    //taking out the right side
    for (let i = startRow; i <= endRow; i++) {
      result[i][endColumn] = counter;
      counter++;
    }
    //move end column in
    endColumn--;

    //now do the bottom, currently SR/SC = 1, SR/ER = 2

    for (let i = endColumn; i >= startColumn; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // now end row == start row for n = 3 , ER/SR = 1;
    for (let i = endRow; i >= startRow; i--) {
      result[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  console.log(result);
  return result;
}

// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]

[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

var spiralOrder = function(matrix) {
  let result = [];
  let startingCol = 0;
  let endCol = matrix[0].length - 1;
  let startingRow = 0;
  let endRow = matrix.length - 1;

  while (startingRow <= endRow && startingCol <= endCol) {
    console.log(startingRow, endRow, startingCol, endCol);
    //top row
    for (let i = startingCol; i <= endCol; i++) {
      result.push(matrix[startingRow][i]);
    }
    startingRow++;
    console.log(startingRow, endRow, startingCol, endCol);

    // move starting row down , go on to right side
    for (let i = startingRow; i <= endRow; i++) {
      result.push(matrix[i][endCol]);
    }
    endCol--;
    console.log(startingRow, endRow, startingCol, endCol);

    //move end col left, and to bottom;

    for (let i = endCol; i >= startingCol; i--) {
      result.push(matrix[endRow][i]);
    }

    endRow--;

    console.log(startingRow, endRow, startingCol, endCol);

    //move endRow up and now we do left side

    for (let i = endRow; i >= startingRow; i--) {
      result.push(matrix[i][startingCol]);
    }

    startingCol++;
    console.log(startingRow, endRow, startingCol, endCol);
  }

  console.log(result);
  return result;
};

// matrix(3)

// spiralOrder([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ]);
module.exports = matrix;
