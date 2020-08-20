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

maxProfit([7, 1, 5, 3, 6, 4]);
