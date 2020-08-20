var countCharacters = function(words, chars) {
  let length=0
  
  let hash = {};
  for (letter of chars){
      hash[letter] = hash[letter] + 1 || 1
  }
  
  for(word of words){
      let temp = ""
      let newObject = {...hash}
      for(letter of word){
          if(!letter in newObject || newObject[letter] <=0){
              break;
          } else if ( letter in newObject){
              temp += letter
            newObject[letter]--
          }
      }
      if (temp === word){
          length += temp.length
      }
  }
  
  return length
  
  
};

 let words = ["hello","world","leetcode"]
 let  chars = "welldonehoneyr"

 countCharacters(words,chars)

