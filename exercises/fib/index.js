// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib() {
  let memo = {
  }
  return iterate = (n)=>{
    if (n in memo) {
      return memo[n];
    } else {
      if(n<2) return n;
      memo[n] = iterate(n-1) + iterate (n-2)
      return memo[n]
    }
  }

}


let myFib = fib()


const Itfib =(n)=>{
  let result = [0,1]
  for(let i=2;i<=n;i++){
    result[i] = result[i-1] + result[i-2]
  }
  return result[n]
}

console.log(Itfib(8))
module.exports = fib;
