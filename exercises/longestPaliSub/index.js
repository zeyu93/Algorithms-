// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"
var longestPalindrome = function(s) {
  //check Palindrome first of a substring , define a helper function
  if (isPalindrome(s)) return s;

  const matrix = [...new Array(s.length)].map(arr =>
    new Array(s.length).fill(false)
  );

  let lps= ""
  for (let i = 0; i < s.length; i++) {
    matrix[i][i] = true;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      matrix[i][i + 1] = true;
    }
    if (matrix[i][i + 1]) lps = s.substring(i, i + 2);
  }

  for (let i=0; i < s.length ;i++){
    //two char away
    for (let j = i+2; j<s.length;j++){
      matrix[i][j] = s[i] === s[j] && matrix[i+1][j-1]
      if(matrix[i][j]){
        lps = lps.length < j - i + 1 ? s.substring(i, j+1) : lps
      }
    }
  }

  console.log(matrix);
  console.log(lps);
  return lps


};

const isPalindrome = input => {
  return (
    input ===
    input
      .split("")
      .reverse()
      .join("")
  );
};




var longestPalindrome2 = function(s) {
  let longest = '';
  const findLongestPalindrome = (str, i, j) => {
      while(i >= 0 && j < str.length && str[i] === str[j]) {
          i -= 1;
          j += 1;
      }
      // slice the qualified substring from the second last iteration
      return str.slice(i + 1, j);
  }

  for (let i = 0; i < s.length; i++) {
      // palindrome can center around 1 or 2 letters
      const current1 = findLongestPalindrome(s, i, i);
      const current2 = findLongestPalindrome(s, i, i + 1);
      const longerPalindrome = 
            current1.length > current2.length ? current1 : current2;
      console.log(longerPalindrome)
      if (longerPalindrome.length > longest.length) {
          longest = longerPalindrome;
      } 
  }
  return longest;
};

longestPalindrome2("abacab");



