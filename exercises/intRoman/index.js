var intToRoman = function(num) {
  let str = "";
  let digits = num.toString().length
  
  //135
  //3 digits
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  while (num > 1) {
    let mostRightDigit = num % 10

  }
};
