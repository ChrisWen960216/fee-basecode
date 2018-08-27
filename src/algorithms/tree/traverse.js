const colors = require('colors');
const BST = require('./bst.js');

function inOrderTraverse(node, tag = 'ROOT') {
  if (node) {
    inOrderTraverse(node.left, 'left');
    console.log(colors.yellow(node.key, tag));
    inOrderTraverse(node.right, 'right');
  }
}

function insertNode(bst) {
  let i = 0;
  while (i < 20) {
    const randomNum = Math.floor(Math.random() * 100);
    bst.insert(randomNum);
    i += 1;
  }
  return bst;
}

const newBst = new BST(10);
const bst = insertNode(newBst);
inOrderTraverse(bst.root);
