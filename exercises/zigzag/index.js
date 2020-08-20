const zigzag = (s, rows) => {
  const output = new Array(rows).fill('')
  let row = 0
  let goingDown = false
  for(let letter of s){
    if(row === 0 || row == rows - 1){
      goingDown = !goingDown
    }
    output[row] += letter
    if(goingDown){
      row++
    } else if(!goingDown){
      row--
    }
  }
  console.log(output)
  return output.join('')
  
}

zigzag("REDBLUEBLACK",1)