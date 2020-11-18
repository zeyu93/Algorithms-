var RandomizedSet = function () {
  this.map = new Map()
  this.list = []
};



RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false
  }
  this.map.set(val, this.list.length)
  this.list.push(val)
  return true
};

RandomizedSet.prototype.remove = function (val) {
  if (this.map.has(val)) {
    let indexOfEleToRemove = this.map.get(val)
    // swap element to remove and last element
    const temp = this.list[this.list.length - 1]
    this.list[indexOfEleToRemove] = temp
    //set the last element back to the original element index
    this.map.set(temp, indexOfEleToRemove);
    this.map.delete(val)
    this.list.pop()
    return true
  }
  return false
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function () {
  const size = this.map.size
  const random = Math.floor(Math.random() * size)
  return this.list[random]
};

let random = new RandomizedSet()
random.insert(1)
random.remove(2)
random.insert(2)
console.log(random)
random.getRandom()
random.remove(1)
random.insert(2)
