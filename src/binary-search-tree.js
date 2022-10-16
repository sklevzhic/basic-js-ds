const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

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
        let res = false
        this.traverseDFS(node => {
            if (node.data === data) {
                res = true
            }
        })
        return res
    }

    find(data) {
        let res = null
        this.traverseDFS(node => {
            if (node.data === data) {
                res = node
            }
        })
        return res
    }

    remove(data) {
        let parentNode = null
        let leftNode = null
        let rightNode = null

        this.traverseDFS(node => {
            if (node.left !== null || !!node.right !== null) {
                if ((node.left?.data === data) || (node.right?.data === data)) {
                    parentNode = node
                    leftNode = node.left
                    rightNode = node.right
                }
            }

        })
tree.add(4)
    }

    min() {
        let res = this.rootNode.data
        this.traverseDFS(node => {
            if (node.data < res) {
                res = node.data
            }
        })
        return res
    }

    max() {
        let res = this.rootNode.data
        this.traverseDFS(node => {
            if (node.data > res) {
                res = node.data
            }
        })
        return res
    }

    preOrder(node, callback) {
        if (!node) return;
        if (callback) callback(node)
        this.preOrder(node.left, callback)
        this.preOrder(node.right, callback)
    }

    traverseDFS(callback) {
        return this.preOrder(this.rootNode, callback)
    }
}

let tree = new BinarySearchTree()

tree.add(3)
tree.add(4)
tree.add(5)
tree.add(1)
tree.add(2)
tree.add(0)
tree.add(15)
tree.remove(5)
console.log(tree)


module.exports = {
    BinarySearchTree
};