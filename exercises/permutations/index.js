const generatePermutations = original => {
  const results = [];
  const explore = (currentProgress, original, results) => {
    if (currentProgress.length === original.length) {
      results.push(Array.from(currentProgress));
      return;
    }
    for (let i = 0; i < original.length; i++) {
      let temp = original[i];
      if (currentProgress.includes(temp)) {
        continue;
      }
      currentProgress.push(temp);
      explore(currentProgress, original, results);
      currentProgress.pop();
    }
  };
  explore([], original, results);
  return results;
};

const featuredProduct = products => {
  // Write your code here
  if (!products.length) {
    return "";
  }
  const hashTable = {};

  let results = [];
  let max = 0;
  for (let i = 0; i < products.length; i++) {
    hashTable[products[i]] = hashTable[products[i]] + 1 || 1;
    if (hashTable[products[i]] > max) {
      results = [products[i]];
    } else if (hashTable[products[i]] === max) {
      let theOneToKeep =
        products[i].localeCompare(results[0]) !== -1 ? products[i] : results[0];
      results = [theOneToKeep];
    }
    max = Math.max(hashTable[products[i]], max);
  }
  console.log(results);
  return results[0];
};

// featuredProduct(['a','a','b','c','c','z'])
// generatePermutations([1,2,3])

const isPrime = n => {
  let cieling = Math.ceil(Math.sqrt(n));
  let counter = 2;

  while (counter <= cieling) {
    if (n % counter === 0) {
      return false;
    }
    counter++;
  }

  return true;
};

var generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  let result = [];

  result[0] = [1];
  let counter = 1;

  while (counter <= numRows - 1) {
    let row = [];
    let prevRow = result[counter - 1];

    row[0] = 1;

    for (let i = 1; i <= counter; i++) {
      row[i] = prevRow[i - 1] + prevRow[i];
    }

    row[counter] = 1;
    counter++;
    result.push(row);
  }

  return result;
};

// generate(5);

// console.log(isPrime(9))
// ["eat", "tea", "tan", "ate", "nat", "bat"]
var groupAnagrams = function(strs) {
  let result = [];
  let copy = [...strs];
  while (copy.length) {
    let remainin = [];

    let anchor = copy[0];
    let explore = 0;
    let group = [];
    while (explore <= copy.length - 1) {
      if (areTheyAnagrams(anchor, copy[explore])) {
        group.push(copy[explore]);
      } else {
        remainin.push(copy[explore]);
      }
      explore++;
    }
    console.log(remainin);
    result.push(group);
    copy = remainin;
  }
  return result
};

const areTheyAnagrams = (string1, string2) => {
  if (string1.length !== string2.length) return false;
  let map = {};

  for (let i = 0; i < string1.length; i++) {
    map[string1[i]] = map[string1[i]] + 1 || 1;
  }
  for (let letter of string2) {
    if (map[letter] === undefined) {
      return false;
    }
    map[letter] = map[letter] - 1;
    if (map[letter] < 0) return false;
  }
  return Object.values(map).reduce((a, b) => a + b) === 0;
};

// console.log(areTheyAnagrams("eat", "nat"));

// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

var myPow = function(x, n) {
  if(n === 0 ) return 1
  let base = x 
  let power = Math.abs(n)
  while(power > 1){
    base *= x
    power--
  }
  return  n > 0 ? base : (1/base)
  
};

console.log(myPow(2,10))


