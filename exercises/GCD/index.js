const GCD = (num1, num2) => {
  console.log(num1, num2)
  if(num1 ===0) return num2
  if(num2 ===0) return num1;
  return GCD(num2, num1%num2)  

};


const GCD2 = (num1, num2)=>{
  let min = Math.min(num1, num2);


  for(let i = min; i>=0;i--){
    if(num1 % i === 0 && num2 % i === 0){
      console.log(i)
      return i
    }
  }
}

GCD2(4,20)


