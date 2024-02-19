const Stack = require("./Stack");

/* Write your class below */
class MinStack extends Stack {
  constructor() {
    super();
    this.min = null;
  }

  push(value) {
    if (this.min !== null) {
      if (this.min > value) {
        this.min = value;
      }
    } else {
      this.min = value;
    }
    super.push(value);
  }

  pop() {
    const res = super.pop();
    if (res === this.min) {
      this.min = Math.min(...this.stack);
    }
    if (this.length === 0) {
      this.min = null;
    }

    return res;
  }

  getMin() {
    return this.min;
  }
}

//You can paste the test code from the lesson below to test your solution
let ms = new MinStack();
ms.push(17);
ms.push(12);
ms.push(31);
console.log(ms.getMin()); //12
ms.pop();
ms.pop();
ms.pop();
console.log(ms.getMin()); //null
ms.push(19);
ms.push(21);
console.log(ms.getMin()); //19
ms.push(3);
console.log(ms.getMin()); //3
ms.pop();
ms.pop();
console.log(ms.getMin()); //19
/* Do not remove the exports below */
module.exports = MinStack;
