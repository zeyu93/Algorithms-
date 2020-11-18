var plusOne = function(digits) {
  let carry = 0;
  let lastNumber = digits[digits.length - 1];
  if (Number(lastNumber) + 1 === 10) {
    carry++;
  } else {
    let num = Number(lastNumber) + 1;
    digits[digits.length - 1] = num.toString();
    console.log(digits);
    return digits;
  }
  let i = digits.length - 1;
  while (carry) {
    digits[i] = "0";
    if (i - 1 < 0) {
      digits.unshift("1");
      carry--;
    } else {
      let nextDigit = Number(digits[i - 1]);
      carry--;
      if (nextDigit + 1 === 10) {
        carry++;
      } else {
        digits[i - 1] = (nextDigit + 1).toString();
      }
      i--;
    }
  }

  console.log(digits);
  return digits;
};

var plusOne2 = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === "9") {
      digits[i] = "0";
    } else {
      let num = Number(digits[i]) + 1;
      digits[i] = num.toString();
      return digits;
    }
  }
  digits.unshift("1");
  return digits;
};

plusOne2(["9"]);

var twoSum = function(nums, target) {
  let hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(target - nums[i])) {
      return [i, hash.get(target - nums[i])];
    }
    hash.set(nums[i], i);
  }
};

const transpose = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      if (i === j) {
        continue;
      }
      // [ 0, 1]
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  console.log(matrix);
  return matrix;
};

// console.log(twoSum([3, 3], 6));

// transpose([[1,2,3],[4,5,6],[7,8,9]])

var longestCommonPrefix = function(strs) {
  if (!strs.length) return "";

  let shortestLength = strs[0].length;
  let shortest = strs[0];

  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < shortestLength) {
      shortest = strs[i];
    }
  }

  let result = "";

  for (let i = 0; i < shortest.length; i++) {
    let everyLetterEqual = strs.every(item => {
      return item[i] === shortest[i];
    });
    if (everyLetterEqual) {
      result += shortest[i];
    } else {
      break;
    }
  }
  console.log(result);
  return result;
};

const isPrime = n => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// console.log(isPrime(7))

// longestCommonPrefix(["aca","cba"])

var isPowerOfThree = function(n) {
  if (n === 1) {
    return true;
  }
  if (n % 3 !== 0) {
    return false;
  }

  return isPowerOfThree(n / 3);
};


console.log(isPowerOfThree(43046721))