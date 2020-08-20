const array = ['john','cena','name']

let hashMap = new Map();
let n = 0
for( item of array){
  hashMap.set(item, n)
  n++
}

let test = () =>{
  for(let i = 0; i<10; i++){
    if (i === 5){
      console.log('i am 5')
      break
    }
  }
  console.log('yoooo')

}

test()

//  console.log(hashMap, hashMap.get('john'))
