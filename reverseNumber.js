//321 => 123

const reverseNum = (x) => {
  let reversedNumber = 0
  while (x > 0) {
    let digit = x % 10
    console.log('i am digit', digit)
    reversedNumber = reversedNumber * 10 + digit
    console.log('reversedNumber', reversedNumber)
    x = Math.floor(x / 10)
    console.log('x', x)

  }
  console.log(reversedNumber)

}

reverseNum(1234567)