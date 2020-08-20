const currencyFormat = (num) =>{
  let sign = Math.sign(num)
  let length = num.toString().length;
  let numCommas = 0
  if(length > 3 && length % 3 ===0){
    numCommas = length/3 -1
  } else if( length > 3){
    numCommas = length % 3
  }

  let counter = 0
  let string = ""
  let numArr = num.toString().split('')
  let output = []

  for(let i = numArr.length - 1; i>=0; i--){
    
  }
  return string
}

// const maxProfit = (prices) => {
//   let profit = 0
//   let buy = prices[0]
//   for(let i = 1 ; i< prices.length ; i++){
//     profit = Math.max(profit , prices[i] - buy)
//     if(prices[i] < buy){
//       buy = prices[i]
//     }
//   }
//   console.log(profit)
//   return profit
// }


const maxProfit = (prices) => {
  // using Dp
  let dp = new Array(prices.length)
  dp[0] = 0
  for(let i = 1 ; i< prices.length ; i++){
    profit = Math.max(profit , prices[i] - buy)
    if(prices[i] < buy){
      buy = prices[i]
    }
  }
  console.log(profit)
  return profit
}


maxProfit([12,4,6,9,3,8,4])