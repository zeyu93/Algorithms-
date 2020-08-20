// var threeSum = (nums,target) =>{
//   //break into 2 sum, with the target being target - current element
//   //sort the array first
//   nums.sort((a,b)=> b-a)
//   let result =[]
//   for(let i =0 ; i< nums.length; i++){
//     if(nums[i] === nums[i-1]){
//       continue
//     }
//     let goal = target - nums[i];
//     let start = i+1;
//     let end = nums.length - 1
//     while(start < end){
//       if(nums[start] === nums[start-1] || nums[end] === nums[end+1]){

//       }
//       if(nums[start]+ nums[end] === goal){
//         result.push(nums[i], nums[start], nums[end])
//       }
//     }

//   }

// };

const threeSum = (A) => {
  A.sort((a, b) => a - b);

  const allThreeSums = new Set();
  const secondToLastIndex = A.length - 2;

  for (let i = 0; i < secondToLastIndex; i++) {
    findTwoSum(i, A, allThreeSums);
  }

  return Array.from(allThreeSums);
}

const findTwoSum = (rootIndex, A, allThreeSums) => {
  let left = rootIndex + 1;
  let right = A.length - 1;

  while (left < right) {
    const threeNumberSum = A[rootIndex] + A[left] + A[right];

    if (threeNumberSum == 0) {
      allThreeSums.add([A[rootIndex], A[left++], A[right--]]);
    } else if (threeNumberSum < 0) {
      left++;
    } else {
      right--;
    }
  }
}



threeSum([-5, 3, 2, 0, 1, -1, -5, 3, 2]);
