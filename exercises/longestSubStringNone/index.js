// sliding window break if it has repeating and go next
// const longestUniqueCharacterSubstring = s => {
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     let hashMap = {};
//     for (let j = i; j < s.length; j++) {
//       if (hashMap[s[j]]) {
//         break;
//       } else {
//         hashMap[s[j]] = true;
//         max = Math.max(max, j - i + 1);
//       }
//     }
//   }
//   console.log(max);
//   return max;
// };

//two pointer approach

const longestUniqueCharacterSubstring = s => {
  let max = 0;
  let start = 0;
  let end = 0;
  //ABCABADEC

  let hashMap = new Map();
  while (end < s.length) {
    if (hashMap.has(s[end]) && hashMap.get(s[end]) >= start) {
      start = hashMap.get(s[end]) + 1;
    }
    //update last seen
    hashMap.set(s[end], end);
    max = Math.max(max, end - start + 1);
    end++;
  }
  console.log(max)
  return max;
};

longestUniqueCharacterSubstring("abba");
