/* Created By ChrisWen
 * 17/8/28
 * This page just running into node enviroment,require all Trees to create a example file;
 */

const binarySearchTree = require('./class/binarySearchTree.js');
let BinarySearchTree = new binarySearchTree();

BinarySearchTree.insert(2);
BinarySearchTree.insert(1);
BinarySearchTree.insert(3);
BinarySearchTree.insert(20);
BinarySearchTree.insert(6);
BinarySearchTree.insert(90);

console.log('中序遍历')
BinarySearchTree.inOrderTraverse(BinarySearchTree.printNode);
console.log('前序遍历')
BinarySearchTree.preOrderTraverse(BinarySearchTree.printNode);
console.log('后序遍历')
BinarySearchTree.postOrderTraverse(BinarySearchTree.printNode);

console.log(BinarySearchTree.min());
console.log(BinarySearchTree.max());