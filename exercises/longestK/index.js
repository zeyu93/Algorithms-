var longestSubstring = function(s, k) {
  if (!s) return 0;

  //brute force check each sub string that satisfy the condition
  // get all substring, filter by condition and then return longest

  const atLeastK = string => {
    if (k > s.length) return 0;
    let map = {};
    for (letter of string) {
      map[letter] = map[letter] + 1 || 1;
    }
    return Object.values(map).every(occurance => occurance >= k);
  };
  // sliding window
  let starting = 0;
  let ending = s.length - 1;
  let endReduced = false;

  while (starting <= ending) {
    string = s.substring(starting, ending + 1);
    if (atLeastK(string)) {
      return string.length;
    }
    if (!endReduced) {
      ending--;
      endReduced = !endReduced;
    } else {
      starting++;
      endReduced = !endReduced;
    }
  }
  return 0;
};

longestSubstring("aaabb", 3);
