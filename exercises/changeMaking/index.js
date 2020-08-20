const leastCoins = (coins, amount) => {
  let dp = new Array(amount+1).fill(amount+1);
  dp[0] = 0
  for(let i = 1; i < dp.length ; i ++){
    // at each dollar ammount, we test it against the coins amount 
    // if the amount is bigger  than coins return -1
    
    for(let j =0; j < coins.length; j ++){
      if(i >= coins[j]){
      dp[i] = Math.min(1 + dp[i- coins[j]], dp[i] );
      }
    }
  }
  return dp[dp.length-1] > amount ? -1 : dp[dp.length-1]
  
}