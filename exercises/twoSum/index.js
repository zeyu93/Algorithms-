// var twoSum = function(nums, target) {
//   for(let i = 0; i<nums.length; i++){
//       for(let j = i+1; j<nums.length; j++){

//           if(nums[i]+nums[j] === target){
//               return [i,j]
//           }
//       }
//   }
// };
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    console.log(another)
    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }

  return null;
};
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3,9], 12));
