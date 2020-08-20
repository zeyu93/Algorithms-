/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  //dynamic p
  //bottom up approach, start with 0 to the amount
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  return dp[dp.length -1] > amount ? -1 : dp[dp.length -1]
};

coinChange([1, 2, 5], 10);
