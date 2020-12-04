
function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  let arrayOneIndex = 0
  let arrayTwoIndex = 0
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let result = []
  let min = Infinity
  while (arrayOneIndex < arrayOne.length ) {
    let absDifference = findAbsDifferenceToZero(arrayOne[arrayOneIndex], arrayTwo[arrayTwoIndex])
    if (absDifference < min) {
      min = absDifference;
      result = [arrayOne[arrayOneIndex], arrayTwo[arrayTwoIndex]];
    }
    if (arrayOne[arrayOneIndex] === arrayTwo[arrayTwoIndex]) {
      return [arrayOne[arrayOneIndex], arrayTwo[arrayTwoIndex]]
    } else if (arrayOne[arrayOneIndex] < arrayTwo[arrayTwoIndex]) {
      arrayOneIndex++
    } else {
      arrayTwoIndex++
    }
  }
  console.log(result)
  return result
}

const findAbsDifferenceToZero = (num1, num2) => {
  return Math.abs(num1 - num2);
}

smallestDifference([10, 0, 20, 25, 2200], [1005, 1006, 1014, 1032, 1031])
