// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

const numIslands = grid => {
  let count = 0;

  const explore = (row, col, grid) => {
    // do nothing if it is out of bounds
    if (
      row < 0 ||
      col < 0 ||
      row >= grid.length ||
      col >= grid[0].length ||
      grid[row][col] === "0"
    ) {
      return;
    }
    console.log("changing this coord to zero  ", row, col);
    grid[row][col] = "0";
    //Possibilites:
    // 1) 1 to the right, left, top, bottom
    //right
    explore(row, col + 1, grid);
    //Left
    explore(row, col - 1, grid);
    //Up
    explore(row + 1, col, grid);
    //Down
    explore(row - 1, col, grid);

    // ["1", "1", "1"],
    // ["0", "1", "0"],
    // ["1", "1", "1"]
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] == "1") {
        count++;
        //crawl thru entire island and change all current 1 to 0
        // if it encoutners a new '1', it belongs to a different island
        console.log(`exploring row: ${row}. col : ${col}`);
        explore(row, col, grid);
      }
    }
  }

  console.log(count);

  return count;
};

let grid = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"]
];

// numIslands(grid);


const  numIslandsIterative = (grid) =>{
  let count = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] == "1") {
        count++;
        //crawl thru entire island and change all current 1 to 0
        // if it encoutners a new '1', it belongs to a different island
        console.log(`exploring row: ${row}. col : ${col}`);
        explore(row, col, grid);
      }
    }
  }

}

function displayMessage (who, timeout) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(`Mr. ${who}`), timeout)
  })
}

// displayMessage("john",200).then((msg)=>{
//   console.log(`hello ${msg}`)
// })


const apartment = { rooms :3 , bathrooms: 2}
const yo = { ho :3 , hec: 2}

const test = {
  rooms: apartment.rooms
}

const x = 4
for (let i =0 ; i<x; i++){
  let row="*".repeat(1 + (2 * i));
  console.log(row.padStart(x + i))
}

for (let i =x-2 ; i>=0; i--){
  let row="*".repeat(1 + (2 * i));
  console.log(row.padStart(x + i))
}


