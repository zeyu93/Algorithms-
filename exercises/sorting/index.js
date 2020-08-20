// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for(let i = 0 ; i< arr.length ; i++){
    for(let j = 0 ; j < arr.length - i; j++){
      if(arr[j]> arr[j+1]){
        let og = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = og
      }
    }
  }
  console.log(arr)
  return arr

}

function selectionSort(arr) {
  for(let i = 0 ; i< arr.length ; i++){
    let indexOfMin = i
    for(let j = i + 1;j< arr.length; j++){
      if(arr[j] < arr[indexOfMin]){
        indexOfMin = j
      }
    }
    if (indexOfMin !== i ){
      let value = arr[indexOfMin]
      arr[indexOfMin] = arr[i]
      arr[i] = value
    }
  }
  console.log(arr)
  return arr

}

function mergeSort(arr) {

}

function merge(left, right) {

}

bubbleSort([0,5,-1,7,-2,10])
selectionSort([0,5,-1,7,-2,10])

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
