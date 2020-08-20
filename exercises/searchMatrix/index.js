//use binary search

var searchMatrix = function(matrix, target) {
  if (!matrix.length) return false;
  const hasValue = function(row, value) {
    let start = 0,
      end = row.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      console.log('current mid index', mid)
      if (value === row[mid]) {
        return true;
      } else if (value > row[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return false;
  };
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    if (hasValue(row, target)) return true;
  }
  return false;
};

searchMatrix([
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
],5);
