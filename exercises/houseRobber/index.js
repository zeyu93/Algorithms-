var rob = function(nums) {
  //edge cases
  if(!nums.length) return 0;
  if(nums.length === 1) return nums[0];
  if(nums.length === 2) return Math.max(nums[0],nums[1]);
  
  let result =[nums[0], nums[1]]
  for(let i = 2 ; i<nums.length ; i++){
      result[i] = Math.max(nums[i]+ result[i-2], nums[i] + (result[i-3] || 0));
  }
  return Math.max(result[result.length - 2], result[result.length - 1])
  
};