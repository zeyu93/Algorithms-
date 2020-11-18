// [1,2,3,4,5] ==> [5,1,2,3,4]
// rotate 4
const rotateArray = (arr , rotation)=>{

  rotation %= arr.length 
  let result = [arr[rotation]]
  //fill right of cut off
  for(let i = rotation+1; i<arr.length;i++){
    result.push(arr[i])
  }

  //fill left cut off
  for(let i=0; i<rotation;i++){
    result.push(arr[i])
  }
  console.log(result)
  return result

}

var rotate = function(nums, k) {
  k %= nums.length;
  let result = []
  for(let i=k+1; i<nums.length;i++){
      result.push(nums[i])
  }
  for(let i=0; i<=k;i++){
      result.push(nums[i])
  }
  console.log(result)
  return result
};


// rotateArray([1,2,3,4,5], 2)
rotate([1,2,3,4,5,6],2)