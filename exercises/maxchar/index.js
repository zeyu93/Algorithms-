// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let map = {}
  for (char of str){
    map[char] = map[char] + 1 || 1
  }
  let max = -Infinity
  let result;
  for (char in map){
    if (map[char] > max){
      max = map[char];
      result = char
    }
  }
  return result
}

module.exports = maxChar;
