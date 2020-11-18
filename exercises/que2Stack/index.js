class twoStackQueue {
  constructor() {
    this.pushQueue = [];
    this.popQueue = [];
  }

  enqueue(num) {
    this.pushQueue.push(num);
  }

  dequeue() {
    if (!this.popQueue.length) {
      for (let i = 0; i < this.pushQueue.length; i++) {
        this.popQueue.push(this.pushQueue.pop());
      }
    }
    return this.popQueue.pop();
  }

  size(){
    return (this.pushQueue.length || 0) + (this.popQueue.length || 0)
  }

}


