const calcRounds = (int) => {
  let round = 1;

  let array = new Array(10).fill(0)

  const traverseRounds = (round) => {
  
    let number = round * int
    console.log('number', number, round, array)
    while (number > 0) {
      let digit = number % 10
      array[digit] = 1
      number = Math.floor(number / 10)
    }
    let arraySum = array.reduce((a, b) => a + b)

    if (arraySum !== 10) {
      return traverseRounds(round + 1)
    } else {
      return round
    }
  }

  round = traverseRounds(round)

  console.log(round)
  return round

}

calcRounds(7982)