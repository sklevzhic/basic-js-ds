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
  res = []

  getUnderlyingList() {
    let resArr = this.res.reverse()
    let resTemp = {}

    resArr.forEach((el, i) => {
      resTemp = {
        value: resArr[i],
        next: !Object.keys(resTemp).length ? null : resTemp
      }
    })
    return resTemp
  }


  enqueue(value) {
    this.res.push(value)
  }

  dequeue() {
    return this.res.shift()
  }
}

module.exports = {
  Queue
};
