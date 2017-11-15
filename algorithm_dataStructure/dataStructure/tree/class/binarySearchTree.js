/* Created By ChrisWen
 * 17/8/28
 * BST --- 二叉搜索树，允许且仅允许左边叶子节点储存比父节点小、右边叶子节点储存比父节点大的值
 *  遍历：先序遍历、中序遍历、后序遍历
 */


/* this.state.node.key = key 会造成 root 和 node 同步更新
 * this.state.node = {
 *    key:key,
 *    right:null,
 *    left:null
 *} 就不会出现上述问题
 */
module.exports = class binarySearchTree {
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

    printNode(value) {
        console.log(value);
    }

    //Start 插入节点
    // 辅助插入节点
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

    //插入节点
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
    }
    //End 插入节点

    //Start 中序遍历

    inOrderTraverse(callback) {
        binarySearchTree.inOrderTraverseNode(this.state.root, callback)
    }
    //辅助函数
    static inOrderTraverseNode(node, callback) {
        if (node !== null) {
            binarySearchTree.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            binarySearchTree.inOrderTraverseNode(node.right, callback);
        }
    }
    //End 中序遍历

    //Start 先序遍历
    preOrderTraverse(callback) {
        binarySearchTree.preOrderTraverseNode(this.state.root, callback);
    }

    //辅助函数
    static preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.key);
            binarySearchTree.preOrderTraverseNode(node.left, callback);
            binarySearchTree.preOrderTraverseNode(node.right, callback);
        }
    }
    //End 先序遍历

    //Start 后序遍历
    postOrderTraverse(callback) {
        binarySearchTree.postOrderTraverseNode(this.state.root, callback)
    }

    //辅助函数
    static postOrderTraverseNode(node, callback) {
        if (node !== null) {
            binarySearchTree.postOrderTraverseNode(node.left, callback);
            binarySearchTree.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
    //End 后序遍历

    //Start 搜索

    //最小值
    min() {
        return binarySearchTree.minNode(this.state.root);
    }

    static minNode(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }

    //最大值
    max() {
        return binarySearchTree.maxNode(this.state.root);
    }

    static maxNode(node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    //搜索特定的值
    search(key) {
        return binarySearchTree.searchNode(this.state.root, key);
    }

    static searchNode(node, key) {
        if (node === null) {
            return false;
        } else {
            if (node.key > key) {
                return binarySearchTree.searchNode(node.left, key);
            } else {
                if (node.key < key) {
                    return binarySearchTree.searchNode(node.right, key);
                } else {
                    return true;
                }
            }
        }
    }
    //End 搜索

    //Start 删除
    //绑定调用
    remove(key) {
        this.state.root = binarySearchTree.removeNode(this.state.root, key);
    }

    static removeNode(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = binarySearchTree.removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = binarySearchTree.removeNode(node.right, key);
            return node;
        } else {
            //一个叶子节点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            //只有一个子节点
            if (node.left === null && node.right !== null) {
                node = node.right;
                return node;
            } else if (node.right === null && node.left !== null) {
                node = node.left;
                return node;
            }

            let aux = binarySearchTree.minNode(node.right);
            node.key = aux;
            node.right = binarySearchTree.removeNode(node.right, aux);
            return node;
        }
    }
    //End 删除

}



