// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
  let maxColumn = 2 * n -1 
  let currentLevel = 1
  const printLevel = ( currentRow, level ="") =>{
    if (currentRow > n) return;
    let hashForThisLevel = currentRow * 2 -1;
    let spaceFOrThisLevel = maxColumn - hashForThisLevel;
    for(i=0;i<spaceFOrThisLevel / 2;i++){
      level += " "
    }
    for(i=0;i<hashForThisLevel;i++){
      level += "#"
    }
    for(i=0;i<spaceFOrThisLevel / 2;i++){
      level += " "
    }
    console.log(level)
    printLevel(currentRow+1)
  }

  return printLevel(currentLevel)

}

// function pyramid(n) {
//   let maxColumn = n + n -1 // 3
//   for(let row =1;row <= n; row ++){
//     let level = "";
//     let hashThisLvl = maxColumn  - (2 * (n-row));
//     let spacesThisLevelPerSide = 2 * (n -row) / 2
//     for (let i = 0; i < spacesThisLevelPerSide; i ++){
//       level += " "
//     }
//     for (let i = 0; i < hashThisLvl; i ++){
//       level += "#"
//     }
//     for (let i = 0; i < spacesThisLevelPerSide; i ++){
//       level += " "
//     }
//     console.log(level)
//   }
// }

pyramid(4)

module.exports = pyramid;
