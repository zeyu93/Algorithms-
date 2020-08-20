/**
 * @param {Array<number>} arr
 * @param {number} k
 * @return {number}
 */
const countSubarrays = (arr, k) => {
  //.brute force get all subarray that sub up to k
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      console.log(sum)
      if (sum === k) {
        count++;
      }
    }
  }
  console.log(count)
  return count;
};

countSubarrays([3, 7, -4, -2, 1, 5], 3);
