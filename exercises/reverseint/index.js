// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//1234

//4 + 0 * 10 = 4
//123

//3 + 4*10 = 43
//12

//2 + 43* 10 = 432
function reverseInt(n) {
  let reversedNum =0
  while(n !== 0){
    reversedNum = n % 10 + reversedNum * 10
    n = Math.floor(n / 10)
  }
  console.log(reversedNum)
  return reversedNum * Math.sign(n)
}

// function reverseInt(n) {
//   const reversed = parseInt(
//     n.toString().split('').reverse().join("")
//   );

//   return reversed * Math.sign(n)
// }

module.exports = reverseInt;
