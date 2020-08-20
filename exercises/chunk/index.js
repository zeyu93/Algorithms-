// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2)  [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let result = []
  for(i=0;i<array.length;i++){
    let lastChunk = result[result.length -1 ]
    console.log(lastChunk)
    if(!lastChunk || lastChunk.length === size ){
      lastChunk = [array[i]]
      result.push(lastChunk)
    } else {
      lastChunk.push(array[i])
    }
  }
  return result

}

chunk([1, 2, 3, 4], 2) 
chunk([1, 2, 3, 4, 5], 2)  



// function chunk(array, size) {
//   let result = []
//   let index = 0
//   while(index <= array.length - 1 ) {
//     let chunk = array.slice(index,index+size )
//     result.push(chunk)
//     index += size
//   }
//   return result
// }

module.exports = chunk;
