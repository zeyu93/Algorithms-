const letterCombinations = digits => {

  const results = []
  explore(0, "", digits, results)
  console.log(results)
  return results
};

const explore = (currentDigit, currentProgress, digits, results)=> {
  const letterMappingHashTable = {
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jki",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
    0: ""
  };
  if(currentDigit == digits.length){
    results.push(currentProgress)
    return
  }

  let digitInt = parseInt(digits[currentDigit]) //"22" => 2
  let possibleLetters = letterMappingHashTable[digitInt]
  for(let i = 0 ; i< possibleLetters.length;i++){
    currentProgress += possibleLetters[i]
    explore(currentDigit+1,currentProgress, digits, results )
    currentProgress = currentProgress.substring(0,currentProgress.length - 1)
  }
}

letterCombinations('22')

