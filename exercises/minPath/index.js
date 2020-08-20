// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// to go right is row + 1;
//to go down it is column + 1
//every index has at most 2 options (down or right)
//
var minPathSum = function(grid) {
  //every cell can only be obtained from up or left
  let endRow = grid.length - 1;
  let endColumn = grid[0].length - 1;
  let startingRow = 0;
  let startingColumn = 0;

  //go for top row since there is no value from up, we only need the one from the left
  for (let i = startingColumn; i <= endColumn; i++) {
    grid[startingRow][i] =
      grid[startingRow][i - 1] + grid[startingRow][i] || grid[startingRow][i];
  }
  startingRow++;

  // do first column
  for (let i = startingRow; i <= endRow; i++) {
    grid[i][startingColumn] =
      grid[i - 1][startingColumn] + grid[i][startingColumn] ||
      grid[i][startingColumn];
  }
  startingColumn++;

  while (startingRow <= endRow && startingColumn <= endColumn) {
    for (let i = startingColumn; i <= endColumn; i++) {
      grid[startingRow][i] = Math.min(
        grid[startingRow][i - 1] + grid[startingRow][i],
        grid[startingRow - 1][i] + grid[startingRow][i]
      );
    }
    startingRow++;

    for (let i = startingRow; i <= endRow; i++) {
      grid[i][startingColumn] = Math.min(
        grid[i - 1][startingColumn] + grid[i][startingColumn],
        grid[i][startingColumn - 1] + grid[i][startingColumn]
      );
    }
    startingColumn++;
  }
  console.log(grid)
  console.log(grid[endRow][endColumn])
  return grid[endRow][endColumn]
};
minPathSum([
  [1, 3],
  [1, 5],
  [4, 2]
]);

module.exports = minPathSum
//step 2
// [
//   [1, 4, 5],
//   [2, 5, 1],
//   [6, 2, 1]
// ];

//step 3
// [
//   [1, 4, 5],
//   [2, 7, 6],
//   [6, 2, 7]
// ];