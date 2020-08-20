const countLetters = string => {
  const map = new Map();
  for (let letter of string) {
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  }
  return map;
};

const compareLetters = (objA, objB) => {
  for (let [key, value] of objB) {
    if (!objA.has(key) || objA.get(key) < objB.get(key)) {
      return false;
    }
  }
  return true;
};

const wordSubsets = (A, B) => {
  const mapArr = []
  for(let subset of B){
    mapArr.push(countLetters(subset))
  }

  return A.filter(word => {
    let mapWord = countLetters(word);
     return mapArr.every((subset)=>{
      return compareLetters(mapWord,subset)
    })
    
  });
};



let objA = countLetters("css");
let objB = countLetters("ccs");

console.log(
  wordSubsets(
    ["amazon", "apple", "facebook", "google", "leetcode"],
    ["le", "p"]
  )
);
