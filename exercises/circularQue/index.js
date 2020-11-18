class CircularQueue {
  constructor(size){
    this.queue = new Array (size)
    this.head = 0
    this.tail  = 0
  }

  enqueue(value){
    this.queue.push(value);
    this.tail++
  }
}