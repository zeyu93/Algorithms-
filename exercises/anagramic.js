function sherlockAndAnagrams(s) {
  const allSubStrings = [];
  const isAnagram = (str1, str2) => {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
  };

  for (let i = 0; i < s.length; i++) {
    let currentSubstr = "";
    for (let j = i; j < s.length; j++) {
      currentSubstr += s[j];
      allSubStrings.push(currentSubstr);
    }
  }

  let result = 0;

  for (let i = 0; i < allSubStrings.length; i++) {
    for (let j = i + 1; j < allSubStrings.length; j++) {
      if (isAnagram(allSubStrings[i], allSubStrings[j])) {
        result++;
      }
    }
  }
  console.log(result);
  return resultcd
}

sherlockAndAnagrams("mom");
