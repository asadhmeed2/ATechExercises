/* Write your class below */

class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }

  push(value) {
    this.stack[this.length] = value;
    this.length += 1;
  }

  print() {
    console.log(this.stack);
  }

  pop() {
    const res = this.stack[this.length - 1];

    this.stack.length--;
    this.length -= 1;
    return res;
  }

  peek() {
    const res = this.stack[this.length - 1];
    if (res !== undefined) {
      return res;
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.length === 0;
  }
}

//You can paste the test code from the lesson below to test your solution

// let myStack = new Stack();
// console.log(myStack.isEmpty()); //true
// myStack.print(); //[]
// myStack.push(2);
// console.log(myStack.isEmpty()); //false
// myStack.push(4);
// myStack.print(); //[2,4]
// console.log(myStack.peek()); //4
// myStack.pop();
// myStack.pop();
// console.log(myStack.peek()); //null
// console.log(myStack.isEmpty()); //true

/* Do not remove the exports below */
module.exports = Stack;
