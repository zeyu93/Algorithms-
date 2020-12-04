
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
ulList.addEventListener('click', (e)=>{
  if(e.target.tagName === "LI"){
    console.log(e.target.innerHTML)
  }
})

let fillBarButton = document.getElementById('fill')
const bar = document.querySelector('.bar')

const runFillBar = (second)=>{
  let percentage = 0;
  const fillBarInterval = setInterval(()=>{
    bar.style.width = percentage + '%'
    percentage++
    if(percentage > 100){
      clearInterval(fillBarInterval)
    }
  }, (second * 1000 )/100)
}

fillBarButton.addEventListener('click', runFillBar)






const BaseMonster = function(name,height){
  this.name = name
  this.height = height
}

const FlyingMonster = function(name, height){
  BaseMonster.call(this, name,height )
  this.fly = function(){
    console.log(`${this.name} is flying`)
  }
}
console.log('BaseMonster.prototype',BaseMonster.prototype)

BaseMonster.prototype.scream = function(){
  console.log(`${this.name} screamed`)
}

FlyingMonster.prototype = Object.create(BaseMonster.prototype)


// let flyingMonster = new FlyingMonster('flyer','25m')
// flyingMonster.fly()
// flyingMonster.scream()
// console.log('flyingMonster.prototype',flyingMonster)
// console.log('flyingMonster.prototype',flyingMonster.prototype)



class Food {
  constructor(name){
    this.name = name
  }
  eat(){
    console.log(`ate ${this.name}`)
  }
}
Food.prototype.foo = "bar"


class Fruit extends Food {
  constructor(name){
    super(name);
  }
}

Fruit.prototype.rot = function(){
  console.log(`${this.name} is rotting` )
}

const apple = new Fruit('apple')
console.log(apple.foo)
console.log(apple)
apple.name = 'orange'
console.log(apple)
console.log(Food.prototype)
console.log(Fruit.prototype)
apple.eat()
apple.rot()