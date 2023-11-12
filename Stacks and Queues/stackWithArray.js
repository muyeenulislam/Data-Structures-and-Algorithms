class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    // O(1)
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value); // O(1)
    return this;
  }
  pop() {
    this.array.pop(); // O(1)
    return this;
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
