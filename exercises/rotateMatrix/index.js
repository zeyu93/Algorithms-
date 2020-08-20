// [
//   [ 1,  2,  3, 4],
//   [ 5,  6,  7, 8],
//   [ 9, 10, 11, 12],
//   [13, 14, 15, 16]
// ],

// Output:
// [
//  [13,  9, 5, 1],
//  [14, 10, 6, 2],
//  [15, 11, 7, 3],
//  [16, 12, 8, 4]
// ]

const rotateMatrix = matrix => {
  // O(n) space
  let newMatrix = new Array(matrix.length)
    .fill()
    .map(() => new Array(matrix.length).fill(null)); //
  // each row needs to be the column
  let endCol = newMatrix[0].length - 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      newMatrix[j][endCol] = matrix[i][j];
    }
    endCol--;
  }
  return newMatrix;
};

const rotateMatrixInPlace = matrix => {

  // transpose and then mirror
  matrix = transposeMatrix(matrix);
  return flipHorizontally(matrix)

};

const transposeMatrix = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return  matrix
};

const flipHorizontally = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    let start = 0;
    let end = matrix[0].length - 1;

    while (start <= end) {
      [matrix[i][start], matrix[i][end]] = [matrix[i][end],matrix[i][start]];
      start++;
      end--;
    }
  }
  return matrix
};

// transposeMatrix(x);
// flipHorizontally(x);
// rotateMatrix(x);

console.log(rotateMatrixInPlace(x))
