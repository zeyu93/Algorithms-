var isValid = s => {
  return (
    s ===
    s
      .split("")
      .reverse()
      .join("")
  );
};
var validPalindrome = function(s) {
  let startingIndex = 0;
  let endingIndex = s.length - 1;

  while (startingIndex <= endingIndex) {
    if (s[startingIndex] !== s[endingIndex]) {
      let withoutStarting =
        s.slice(0, startingIndex) + s.slice(startingIndex + 1);
      let withoutEnding = s.slice(0, endingIndex) + s.slice(endingIndex + 1);
      if (!isValid(withoutStarting) && !isValid(withoutEnding)) {
        return false;
      } else {
        return true
      }
    }
    startingIndex++;
    endingIndex--;
  }

  return true;
};


const sumOfDigitsSquared = (n) => {
  let value = 0
  while(n>=10){
      let mostRightDigit = n % 10
      value += mostRightDigit * mostRightDigit
      n = Math.floor(n/10)
  }
  return value += n * n     
}
// validPalindrome("eedede");

console.log(sumOfDigitsSquared(16))
