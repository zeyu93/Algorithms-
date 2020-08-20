var isValid = function(s) {
  if (s === "") return true;
  if (s.length % 2 !== 0) return false;
  let stack = [];
  let hash = {
    "}": "{",
    "]": "[",
    ")": "("
  };
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      stack.push(s[i]);
    } else {
      const lastChar = stack.pop();
      if (hash[s[i]] !== lastChar) {
        return false;
      }
    }
  }

  return stack.length ? false : true;
};

isValid("(([))");
