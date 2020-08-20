// return an array length of n, with numbers randomly selected from array. The probability of each number is
// porportional to the list

//eg [1,4,5]  5 should appear 5 times more likely than 1. 4 should appear 4 timesmore likely than 1
//eg [1,1,4,5]  
 
const sampleNumber = (array, n)=>{
  const probability = array.map((num)=> {
    return num / array.reduce((a,b) => a+b)
  })

  const interval = [probability[0]]

  for(let i = 1; i< probability.length; i++){
    interval[i] = probability[i] + interval[i-1]
  }

  let start= 0
  let result = []
  while(start<=n){
    const random = Math.random()
    console.log(random)
    // 0.3
    // let mid = Math.floor(interval.length / 2)
    let index;
    for(let i = 0; i< interval.length; i ++ ){
      if(random <= interval[i]){
        index = i;
        break
      }
    }
    result.push(array[index])
    start++
  }

  console.log(result)
}


sampleNumber([1,4,5], 2)
