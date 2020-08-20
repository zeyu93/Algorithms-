var productExceptSelf = function(nums) {
  // calculate all the number to the left 
     let left = new Array(nums.length)
     left[0] = 1
     for(let i = 1; i<left.length;i++){
         left[i] = nums[i-1] * left[i-1];
     }
     let right = new Array(nums.length)
     right[right.length-1] = 1
     for(let i = right.length-2; i>=0;i--){
         right[i] = nums[i+1] * right[i+1];
     }
     let answer = new Array(nums.length)
      for(let i = 0; i<answer.length;i++){
         answer[i] = right[i] * left[i];
     }
     return answer
 
     
 };

 productExceptSelf([1,2,3,4])