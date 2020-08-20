const GCD = (num, arr)=>{
  if(!arr.length) return null
  if(arr.length === 1 ) return arr[0]

  let queue = [arr.shift()]
  let result = []
  const GCDDouble = (num1=0, num2=0) =>{
    if(num1 === 0) return num2;
    if(num2 === 0) return num1;
    return GCDDouble(num2, num1% num2)
  }
  arr.reduce(GCDDouble)
  console.log( arr.reduce(GCDDouble))

}

// GCD(5,[3,12,9])

let arr = [3,12,9]
let reduced = arr.reduce((a,b)=>{
  return a + b
})

console.log(reduced)