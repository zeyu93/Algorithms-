const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 0);
}

// const addFive = (base)=>{
//   return () =>{
//     return base +5
//   }
// }

// let base10 = addFive(10)
// console.log(base10())
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})()

// console.log(counter.value());  // 0.

// counter.increment();
// counter.increment();
// console.log(counter.value());  // 2.

// counter.decrement();
// console.log(counter.value());  // 1.


const iife = ((int)=>{
  return int
})(2)

console.log(iife)