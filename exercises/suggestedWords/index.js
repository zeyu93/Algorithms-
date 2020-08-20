var suggestedProducts = function(products, searchWord) {
  products = products.sort()
 
  let result = [];

  for (let i =0; i<searchWord.length;i++){
    products = products.filter((product)=>{
      return product[i] === searchWord[i]
    })
    result.push(products.slice(0,3))
  }
  console.log(result)
  return result
};


suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse")

