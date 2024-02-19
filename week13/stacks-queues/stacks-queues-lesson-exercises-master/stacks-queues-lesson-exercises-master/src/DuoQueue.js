const Queue = require("./Queue");

/* Write your class below */
class DuoQueue {
  constructor() {
    this.queues = [new Queue(), new Queue()];
  }

  enqueue(person, qNum) {
    this.queues[qNum - 1].enqueue(person);
  }

  dequeue(qNum) {
    this.queues[qNum - 1].dequeue();
  }

  getLongestQueue() {
    let longest = this.queues[0];
    for (let i = 1; i < this.queues.length; i++) {
      if (longest.length < this.queues[i].length) {
        longest = this.queues[i];
      }
    }
    return longest;
  }

  getShortestQueue() {
    let shortest = this.queues[0];
    for (let i = 1; i < this.queues.length; i++) {
      if (shortest.length > this.queues[i].length) {
        shortest = this.queues[i];
      }
    }
    return shortest;
  }

  balanceQueues() {
    const longest = this.getLongestQueue();
    const shortest = this.getShortestQueue();

    while (longest.length - shortest.length > 1) {
      shortest.enqueue(longest.dequeue());
    }
  }
}

//You can paste the test code from the lesson below to test your solution

let dq = new DuoQueue();

//first set
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(2, 2);
dq.enqueue(2, 2);
dq.dequeue(1);
dq.dequeue(1);

console.log(dq.getLongestQueue()); //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()); //Queue { queue: [ 1 ] }

//second set
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);

console.log(dq.getLongestQueue()); //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()); //Queue { queue: [ 2, 2 ] }

//balance queues
dq.balanceQueues();
console.log(dq.getLongestQueue()); //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()); //Queue { queue: [ 1, 1, 2, 2 ] }

/* Do not remove the exports below */
module.exports = DuoQueue;
