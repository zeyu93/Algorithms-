// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   let step = 1;
//   const stepPrinter = currentStep => {
//     let line = "";
//     for (i = 1; i <= currentStep; i++) {
//       line += "#";
//     }
//     let spaces = n - currentStep;
//     for (j = 0; j < spaces; j++) {
//       line += " ";
//     }

//     return line;
//   };

//   while (step <= n) {
//     console.log(stepPrinter(step));
//     step++;
//   }
// }

function steps(n) {
  let currentStep = 1
  const printStep = ( currentStep, stair='' )=>{
    if(currentStep > n) return
    if(stair.length === n) {
      return printStep(currentStep++ )
    }
    if(stair.length<currentStep){
      stair += "#"
    } else {
      stair += " "
    }
    printStep(currentStep, stair)
   
  }

  printStep(currentStep)
 
}

steps(1)
module.exports = steps;
