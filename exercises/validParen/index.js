/**
 * @param {string} s
 * @return {string}
 */
//(yo)
//yo
// "lee(t(c)o)de)"
var minRemoveToMakeValid = s => {
  if (!s.length) return s;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (!stack.length) {
        s = s.slice(0, i) + s.slice(i + 1);
        i--;
      } else {
        stack.pop();
      }
    }
  }
  let array = s.split('')
  for(index of stack){
    array[index] = ""
  }
  s = array.join('')
  console.log(s);
  return s;
};

minRemoveToMakeValid("(a(b(c)d)");
