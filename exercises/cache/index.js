/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.storage = {
      
  }
  this.queue = []
  this.currentCapacity = 0
  
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  this.queue.push(key)
  return this.storage[key] || -1
  
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if(this.currentCapacity >= this.capacity ){
      delete this.storage[this.queue.shift()];
  }
  
  if(!this.storage[key]){
      this.storage[key] = value
      this.currentCapacity++
      this.queue.push(key)
  } 
  
  
  
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/