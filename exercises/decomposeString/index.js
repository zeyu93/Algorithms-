const canDecompose = (dictionary, s) => {
  // Set the 0 index to True since we can always decompose an empty string (this is our base case)
  const decomposeString = new Array(s.length + 1).fill(false);
  decomposeString[0] = true;

  // We will utilize two pointers to check if substrings exist in our dictionary
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (
        decomposeString[j] == true &&
        dictionary.includes(s.substring(j, i))
      ) {
        // Update our array and break, since we have verified we can decompose our string up to index i
        decomposeString[i] = true;
        break;
      }
    }
  }

  // Return true if we can decompose the whole string (the last index is true)
  console.log(decomposeString);
  return decomposeString[s.length];
};
const s = "apple";
const dictionary = ["ap", "pl", "ppp", "pple"];

// canDecompose(dictionary,s)

const isPrime = num => {
  let divisor = num - 1;
  while (divisor > 1) {
    if (num % divisor === 0) {
      return false;
    }
    divisor--;
  }
  return true;
};

const isPali = num => {
  return (
    num
      .toString()
      .split("")
      .reverse()
      .join("") === num.toString()
  );
};

const addOne = () => {
  const x = 5;
  console.log(x);
  return x + 1;
};

// setInterval(addOne, 1000);

function featuredProduct(products) {
  // Write your code here
  if (!products.length) {
    return "";
  }
  const hashTable = {};

  let max = 0;
  for (let i = 0; i < products.length; i++) {
    hashTable[products[i]] = hashTable[products[i]] + 1 || 1;
    max = Math.max(hashTable[products[i]], max);
  }

  let result = [];
  for (item in hashTable) {
    if (hashTable[item] === max) {
      result.push(item);
    }
  }

  result.sort((a, b) => b.localeCompare(a));
  return result[0];
}

products = [
  "redShirt",
  "greenPants",
  "redShirt",
  "blackPants",
  "blackPants",
  "orangeShoes"
];

featuredProduct(products);
