//format the pargraph string to get rid of punctuation and lowercae
// remove all banned word since it doesnt count anyways
//hash tbble and count each word
var mostCommonWord = function(paragraph, banned) {
  paragraph= paragraph.toLowerCase();
  paragraph = paragraph.replace(/[!?',;.]/g," ")
  let arr = paragraph.split(' ');
  console.log(arr)

  let hashMap = {}
  for(word of arr){
    if(banned.includes(word)) continue;
    hashMap[word] = hashMap[word] + 1 || 1
  }
  let max = -Infinity;
  let result;
  for(value in hashMap){
    if(hashMap[value] > max){
      max= hashMap[value]
      result = value
    }
  }
  return result
};

const run= "a, a, a, a, b,b,b,c, c"

mostCommonWord(run,["a"])