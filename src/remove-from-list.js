const {NotImplementedError} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');


function removeKFromList(initial, k) {
  let firstNode;

  while (initial) {
      if (initial.value !== k) {
        firstNode = initial
        break
      }
      initial = initial.next
  }

  let currentNode = firstNode
  while (currentNode.next) {
    if (currentNode.next.value === k) {
      currentNode.next = currentNode.next.next
      continue
    }
    currentNode = currentNode.next
  }
  return firstNode
}

module.exports = {
    removeKFromList
};