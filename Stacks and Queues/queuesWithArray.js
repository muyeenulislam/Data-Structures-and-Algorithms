class Queue {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[0]; // O(1)
  }
  enqueue(value) {
    this.array.push(value); // O(1)
    return this;
  }
  dequeue() {
    this.array.shift(); // O(n)
    return this;
  }
}

const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
