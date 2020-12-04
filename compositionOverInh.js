
// inheritance what they are, composition what they do.
class BaseMonster {
  constructor(name) {
    this.name = name;
  }
  attack() {
    console.log(`${this.name} attacked`)
  }
  sleep() {
    console.log(`${this.name} sleeped`)
  }
}

let shark = new BaseMonster('shark')

function canSwim({name}) {
  return {
    swim(){
      console.log(`${name} swimmed`)
    }
  }
}

canSwim(shark).swim()