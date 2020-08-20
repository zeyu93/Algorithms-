
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.

var topKFrequent = function(words, k) {
  let hash = {};
  for (let word of words) {
      hash[word] = hash[word]+1||1;
  }
  let result = Object.keys(hash).sort((a,b)=>{
          let countCompare = hash[b] - hash[a];
          console.log(a,b)
          console.log(countCompare)
          if (countCompare == 0) return a.localeCompare(b);
          else return countCompare;
      }   
  );
  return result.slice(0, k);
};

topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2)
topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"]
, 4)


