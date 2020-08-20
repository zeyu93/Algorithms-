// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// var lengthOfLongestSubstring = function(s) {
//   if(!s)return 0
//   let result = "";
//   let length = 1;
//   for (let i = 0; i < s.length; i++) {
//     result = s[i];
//     for (let j = i + 1; j < s.length; j++) {
//       if (result.includes(s[j])) {
//         break;
//       }
//       result += s[j];
//       if (result.length > length) {
//         length = result.length;
//       }
//     }
//   }
//   console.log(length)
//   return length;
// };

// var lengthOfLongestSubstring = function(s) {
//   if (!s) return 0;
//   let result = "";
//   let length = 0;

//   for (let i = 0; i < s.length; i++) {
//     let temp = s[i];
//     for (let j = i + 1; j < s.length; j++) {
//       if (temp.includes(s[j])) {
//         break;
//       }
//       temp += s[j];
//     }
//     if (temp.length > result.length) {
//       result = temp;
//       length = temp.length;
//     }
//   }
//   console.log(result)
//   return result
// };

var lengthOfLongestSubstring = function(s) {
  var start = 0,
    maxLen = 0;
  var map = new Map();

  for (var i = 0; i < s.length; i++) {
    //if character seen before, and it is bigger than start point , move start point forward
    if (map.get(s[i]) >= start) {
      start = map.get(s[i]) + 1;
      console.log(start);
    }
    // set new character and its index in map
    map.set(s[i], i);
    // set new length
    if (i - start + 1 > maxLen) maxLen = i - start + 1;
  }

  return maxLen;
};

lengthOfLongestSubstring("abcdag");
