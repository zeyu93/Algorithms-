// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const formatString = string => {
    string = string.replace(/[^\w]/g, "").toLowerCase();
    return string;
  };
  stringA = formatString(stringA);
  stringB = formatString(stringB);
  if (stringA.length !== stringB.length) return false;

  const stringToMap = string => {
    let map = {};
    for (letter of string) {
      map[letter] ? map[letter]++ : (map[letter] = 1);
    }
    return map;
  };

  let stringAMapA = stringToMap(stringA);
  let stringAMapB = stringToMap(stringB);

  for (letter in stringAMapA ){
    if(stringAMapA[letter] !==  stringAMapB[letter] || !stringAMapB[letter]){
      return false
    }
  }
  return true
  

}

anagrams("Hi there!!!", "Bye there!!");

module.exports = anagrams;
