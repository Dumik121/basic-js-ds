const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value ) {
    const newNode = { value, next: null };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  dequeue() {
    const removedHead = this.head;
    if (!removedHead) {
      return null;
    }
    this.head = removedHead.next;
    if (!this.head) {
      this.tail = null;
    }
    return removedHead.value;
  }

  getUnderlyingList() {
    return this.head;
  }
  }


module.exports = {
  Queue
};
