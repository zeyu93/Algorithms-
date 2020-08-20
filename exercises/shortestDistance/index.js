var shortestWordDistance = function(words, word1, word2) {
  //find all word1 in words and store it's index
  // do the same for word 2
  // find the cloest distance between the words by iterating thru
  let word1Index = [];
  let word2Index = [];
  let length = words.length;
  for (let i = 0; i < length; i++) {
    if (words[i] === word1) {
      word1Index.push(i);
    }
    if (words[i] === word2) {
      word2Index.push(i);
    }
  }
  let min = 1000;
  for (let i = 0; i < word1Index.length; i++) {
    for (let j = 0; j < word2Index.length; j++) {
      let lengthDifference = Math.abs(word1Index[i] - word2Index[j]);
      if (lengthDifference < min) {
        min = lengthDifference;
        if (min === 1) {
          return min;
        }
      }
    }
  }
  return min;
};

function jumpingOnClouds(c) {
  let starting = 0
  let result =0
  
  while (starting < c.length -1){
      if(c[starting+2] === 1){
          starting +=1
      } else {
        starting +=2
      }
      result++
  }
  return result


}

isValidPasssWord= (string)=>{
  const regex = /[0-9]/g
  console.log(regex.test(string))
  // at least 8 character & one number
  return 
}

isValidPasssWord('abca1sd')

// jumpingOnClouds([0,0,0,1,0,1,0])

// let words = ["practice", "makes", "perfect", "coding", "makes"];

// shortestWordDistance(words, "makes", "coding");
