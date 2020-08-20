var lengthOfLIS = function(nums) {
  let dp= new Array(nums.length).fill(1)
  for( let i = 1; i< nums.length;i++){
    let currentNum = nums[i]
    for(let j=0; j<=i;j++){
      // dp[i] = Math.max(dp[j])
      if(currentNum > nums[j]){
        dp[i] = Math.max(dp[j]+1, dp[i])
      }

    }

  }
  
};

var longestCommonSubsequence = function(text1, text2) {
  const dp = new Array(text2.length+1).fill(new Array(text1.length+1).fill(0))
  // for(let i=0;i<dp[0].length;i++){
  //   dp[0][i] = 0
  // }
  // for(let i=0;i<dp.length;i++){
  //   dp[i][0] = 0
  // }
  
  console.log(dp)
};


longestCommonSubsequence('abcde','abc')


// lengthOfLIS([10,9,2,5,3,7,101,18])