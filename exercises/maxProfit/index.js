const maxProfit = prices => {
  let buyPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
    }
    profit = Math.max(profit, prices[i] - buyPrice);
  }
  console.log(profit);
  return profit;
};

var maxProfit2 = function(prices) {
  let maxProfit = 0
  let buyPrice = prices[0]
  const dp = new Array(prices.length);
  dp[0] = 0
  
  for(let i = 1; i< prices.length;i++){
      if(prices[i] < buyPrice){
          buyPrice = prices[i]
      }
      dp[i] = prices[i] - buyPrice
      maxProfit = Math.max(maxProfit, dp[i])
      
  }
  console.log(maxProfit)

  return maxProfit
  
};

maxProfit2([7, 2, 5, 3, 6, 4, 19,1,30]);
