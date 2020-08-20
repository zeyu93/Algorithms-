const arr = [1, 2, 10, 3, 4, 5];
const k = 2;

// const findMax = (arr, k) => {
//   //brute force
//   let tempMax = 0;
//   for (let i = 0; i < arr.length - k + 1; i++) {
//     let currentSum = 0;
//     for (let j = i; j < i + k; j++) {
//       currentSum += arr[j];
//     }
//     if (currentSum > tempMax) {
//       tempMax = currentSum;
//     }
//   }
//   console.log(tempMax)
//   return tempMax;
// };

//sliding window
const findMax = (arr, k) => {
  let windowSum = 0;
  for (let i = 0; i <= k - 1; i++) {
    windowSum += arr[i];
  }
  let result = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum + arr[i] - arr[i - k];
    result = Math.max(result, windowSum);
  }
  return result;
};
// findMax(arr, k);

// Given an array of positive integers, find the subarrays of integers that add up to a given number
// Example Input: [1, 7, 4, 3, 1, 2, 1, 5, 1]

// Desired Sum: 7

const findSubArray = (arr, target) => {
  let startingIndex = (endingIndex = 0);

  let result = [];
  while (startingIndex < arr.length && endingIndex < arr.length) {
    let windowSum = 0;

    for (let i = startingIndex; i <= endingIndex; i++) {
      windowSum += arr[i];
    }
    if (windowSum < target) {
      endingIndex++;
    } else if (windowSum > target) {
      startingIndex++;
    } else {
      result.push(arr.slice(startingIndex, endingIndex + 1));
      endingIndex++;
    }
  }
  console.log(result)
};

findSubArray([1, 7, 4, 3, 1, 2, 1, 5, 1], 7);
