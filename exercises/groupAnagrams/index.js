x = ["eat", "bat", "ate", "tab", "tea", "eat"];
const groupAnagrams = words => {
  let resultHash = {};
  for (let word of words) {
    const sortedname = letterCounter(word);
    if (!resultHash[sortedname]) {
      resultHash[sortedname] = [word];
    } else {
      resultHash[sortedname].push(word);
    }
  }
  return Object.values(resultHash);
};

const letterCounter = word => {
  let map = word.split("");
  const sortedName = map.sort().join("");
  return sortedName;
};

console.log(groupAnagrams(x));
