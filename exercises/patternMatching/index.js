const findAndReplacePattern = (words, pattern) => {
  return words.filter(word => {
    return deterMineMapping(word, pattern);
  });
};

const deterMineMapping = (word, pattern) => {
  if (word.length !== pattern.length) {
    return false;
  }
  let hashMap = new Map();
  for (let i = 0; i < word.length; i++) {
    if (!hashMap.has(word[i])) {
      hashMap.set(word[i], pattern[i]);
    } else {
      if (hashMap.get(word[i]) !== pattern[i]) {
        return false;
      }
    }
  }
  console.log(hashMap);
  return true;
};

console.log(findAndReplacePattern(["abc", "cde", "aaa"], "ggg"))
