/**
 * @param {Array<Array<number>>} matrix
 * @param {number} target
 * @return {boolean}
 */

//varaint 2
const search = (matrix, target) => {
  // We ask that you implement variant 2
  let row = matrix.length - 1;
  let col = matrix[0].length - 1;
  let startingRow = row;
  let startingCol = 0;
  while (startingCol <= col && startingRow <= row) {
    console.log(matrix[startingRow][startingCol]);
    if (matrix[startingRow][startingCol] === target) {
      return true;
    } else if (matrix[startingRow][startingCol] > target) {
      startingRow--;
    } else {
      startingCol++;
    }
  }
  return false;
};

const partitionEvenOdd = arr => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] % 2 !== 0) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      end--;
    } else {
      start++;
    }
  }
  console.log(arr);
};

const value = 6;
const matrix = [
  [1, 4, 7, 11],
  [8, 9, 10, 20],
  [11, 12, 17, 30]
];

const findK = (sortedArr, k) => {
  let start = 0;
  let end = sortedArr.length - 1;

  while (start <= end) {
  let mid = Math.floor((start + end) / 2);
    console.log(mid)
    if (sortedArr[mid] === k) {
      console.log('found k', `at: ${mid}`, sortedArr[mid])
      return true;
    } else if (sortedArr[mid] <k){
      start = mid+1
    } else {
      end = mid - 1
    }
  }

  return false
};

// search(matrix,10)

findK([1,3,5,6,8,10],3)

// partitionEvenOdd([1,3,5,6,8,10])
