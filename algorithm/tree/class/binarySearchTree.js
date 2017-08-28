/* Created By ChrisWen
 * 17/8/28
 * BST --- 二叉搜索树，允许且仅允许左边叶子节点储存比父节点小、右边叶子节点储存比父节点大的值
 *  遍历：先序遍历、中序遍历、后序遍历
 */

class binarySearchTree {
    constructor(key) {
        this.state = {
            node: {
                key: null,
                left: null,
                right: null
            },
            root: key ? {
                key: key,
                left: null,
                right: null
            } : null
        }
    }
    static insertNode(node, newNode) {
        if (node.key > newNode.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                binarySearchTree.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                binarySearchTree.insertNode(node.right, newNode);
            }
        }
    }

    insert(key) {
        this.state.node = {
            key: key,
            left: null,
            right: null
        }

        if (this.state.root === null) {
            this.state.root = this.state.node;
        } else {
            binarySearchTree.insertNode(this.state.root, this.state.node);
        }
        console.log(this.state.root)
    }
}

let BinarySearchTree = new binarySearchTree(5);

BinarySearchTree.insert(2);
BinarySearchTree.insert(1);
//BinarySearchTree.insert(2);

