const Node = require('./node');

class BST {
  constructor(root = null) {
    this.root = root;
  }

  insert(key) {
    const newNode = new Node(key);
    if (!this.root) {
      return this.root = newNode;
    }
    return this.insertNode(this.root, newNode);
  }

  insertNode(curNode, newNode) {
    const { key: curKey } = curNode;
    const { key: newKey } = newNode;
    if (curKey > newKey) {
      let { left: curLeft } = curNode;
      if (!curLeft) {
        return curLeft = newNode;
      }
      return this.insertNode(curLeft, newNode);
    }
    let { right: curRight } = curNode;
    if (!curRight) {
      return curRight = newNode;
    }
    return this.insertNode(curRight, newNode);
  }
}

module.exports = BST;
