const minWindow = (searchString, t) => {
  let left = 0;
  let right = 0
  let output = searchString
  let hash = {}

  for(let i =0;i<t.length;i++){
    hash[t[i]] = hash[t[i]] + 1 || 1
  }


  while(left <= right && right < searchString.length){
    if(stringSatisfyCondition(hash, searchString.substring(left, right+1))){
      console.log(searchString.substring(left, right+1))
      output = searchString.substring(left, right+1).length <= output.length ? searchString.substring(left, right+1) : output
      left++
    } else {
      right++
    }
  }
  // console.log(output)
  return output
  
}

const stringSatisfyCondition = (map,string) =>{
  let localCharCount = {}
  for(let i = 0 ; i< string.length;i++){
    localCharCount[string[i]] = localCharCount[string[i]] + 1 || 1
  }
  for(let char in map){
    if(localCharCount[char] < map[char] || !localCharCount[char]){
      return false
    }
  }
  return true
}

minWindow('donutsandwafflemakemehungry', 'flea')