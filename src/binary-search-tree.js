const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    let newNode = new Node(data)
    if (!this.rootNode) {
      this.rootNode = newNode
      return
    }

    let currentValue = this.rootNode

    while (currentValue) {
      if (currentValue.data > newNode.data) {
        if (!currentValue.left) {
          currentValue.left = newNode
          return;
        }
        currentValue = currentValue.left
      } else {
        if (!currentValue.right) {
          currentValue.right = newNode
          return;
        }
        currentValue = currentValue.right
      }
    }

  }

  has(data) {
    return !!this.find(data)
  }

  find(data) {
    let recursiveSearch = (node, el) => {
      if (data === node.data) {
        return node
      }
      if (node.data > data) {
        return (node.left) ? recursiveSearch(node.left, el) : null
      }
      if (node.data < data) {
        return (node.right) ? recursiveSearch(node.right, el) : null
      }
    }
    return recursiveSearch(this.rootNode, data)
  }

  remove(data) {

  }

  min() {
  }

  max() {
  }
}



module.exports = {
  BinarySearchTree
};