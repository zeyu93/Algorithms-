const GCD = (num1, num2) => {
  console.log(num1, num2)
  if(num1 ===0) return num2
  if(num2 ===0) return num1;
  return GCD(num2, num1%num2)  

};

console.log(GCD(12,18))