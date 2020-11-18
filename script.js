let list = document.getElementById('list');
let submit = document.getElementById('submit');
let input = document.getElementById('item');

submit.addEventListener('click', () => {
  const textValue = input.value
  if(textValue === ""){
    return
  }
  const listItem = document.createElement('li')
  listItem.innerHTML = textValue
  input.value = ''
  list.appendChild(listItem)
})

const ulList = document.querySelector('ul')
console.log(ulList)
ulList.addEventListener('click', (e)=>{
  if(e.target.tagName === "LI"){
    console.log(e.target.innerHTML)
  }
})


