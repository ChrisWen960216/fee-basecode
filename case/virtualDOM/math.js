/** Created By ChrisWen
 * diff算法
 */
function diff(oldTree, newTree) {
  const index = 0;
  const patches = {};
}

// 对两棵DOM树进行深度优先遍历
function dfsWalk(oldNode, newNode, index, patches) {
  // patches[index] = [...];

}

function diffChildren(oldChildren, newChildren, index, patches) {
  let leftNode = null;
  let currentNodeIndex = index;
  oldChildren.forEach((child, i) => {
    const newChild = newChildren[i];
    currentNodeIndex = (leftNode && leftNode.count)
      ? currentNodeIndex + leftNode.count + 1
      : currentNodeIndex + 1;
    dfsWalk(child, newChild, currentNodeIndex, patches);
    leftNode = child;
  });
}
