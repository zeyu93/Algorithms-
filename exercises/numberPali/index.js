const isPalindrome = x => {
  if(x<0) return false
  let digits = 0;
  let remainders = [];
  let holder = x
  while (x >= 10) {
    remainders.push(x % 10);
    digits++;
    x = Math.floor(x / 10);
  }
  remainders.push(x % 10);
  digits++;
  let result = 0;
  while (digits > 0) {
    let leftMostDigit = remainders.shift();
    let multiplier = 1;
    for (i = 1; i < digits; i++) {
      multiplier *= 10;
    }
    result += leftMostDigit * multiplier;
    digits--;
  }
  console.log(result, holder)
  return result === holder
};

isPalindrome(12321);
