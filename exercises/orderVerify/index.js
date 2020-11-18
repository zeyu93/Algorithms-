const verifyOrdering = (A, ordering) => {
  const map = new Map()
  for(let i = 0; i<ordering.length;i++){
    map.set(ordering[i], i)
  }
  const compareValues = (a,b)=>{
    let currentIndex = 0
    while(currentIndex < a.length  && currentIndex < b.length ){
      let letterFromA = a[currentIndex];
      let letterFromB = b[currentIndex];
      if(map.get(letterFromA) - map.get(letterFromB) > 0){
        return false
      }
      currentIndex++
    }
  }
  
  for(let i = 0; i<A.length;i++){
    if(!compareValues(A[i],A[i+1])){
      return false
    }
  }
  
  return true

  
}

console.log(verifyOrdering(["hello", "hey", "a"], 'hlbcdefgijkmnopqrstuvwxzya'))

