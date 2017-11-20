class LinkNode{
  constructor(val){
    this.val = val;
    this.next = null;
  }
  toString(){
    if(this.next===null) return this.val;
    return this.val+","+this.next;
  }
}

function genNode(val){
  //const val = parseInt(Math.random()*10,10);
  return new LinkNode(val);
}

function genNodes(num){
  let node = new LinkNode(-1);
  let node_pr = node;
  for(let i=0;i<num;i++){
    node_pr.next = genNode(i);
    node_pr = node_pr.next;
  }
  const res = node.next;
  node.next = null;
  node = null;
  return res;
}

/**
 * 将linknode的index节点删除，如linknode=[0,1,2,3,4,5],index=4则返回[0,1,2,3,5],非法情况则不变
 * @param {LinkNode} linknode
 * @param {number} index
 * @return {LinkNode}
 */
function remove(linknode,index){
  let position = 0;
  let assitsLinkNode = index === 0 ? linknode.next : linknode;
  while(index > 1 && position < index - 1) {
    if(assitsLinkNode.next === null || index < 0){
      return linknode
    }
    assitsLinkNode = assitsLinkNode.next;
    position ++
  }
  if(assitsLinkNode.next !== null && index > 0){
    assitsLinkNode.next = assitsLinkNode.next.next;
  }
  return linknode;
}

// 想到了一个绝妙的算法，可惜这里的地方太小，写不下...
// 谁说写不下？！
function remove(linknode, index) {
  let i = 0, pr = index === 0 ? linknode = linknode.next : linknode;
  while (pr && i < index){ (i++ === index - 1 && pr.next) ? pr.next = pr.next.next : pr = pr.next; }
  return linknode;
}

/**
 * 插入节点，插入在目标之后,非法情况则不变
 * @param {LinkNode} linknode
 * @param {_node} simple_linknode
 * @param {number} index
 * @return {LinkNode}
 */
function insert(linknode, _node, index){
  let position = 0;
  let assitsLinkNode = linknode;
  let sertIndex = index +1;
  if(sertIndex === 0){
    _node.next = linknode;
    linknode = _node;
  } else if(sertIndex > 0){
    while(position < sertIndex-1) {
      if(!assitsLinkNode) {
        return linknode;
      }
      assitsLinkNode = assitsLinkNode.next;
      position ++;
    }
    if(assitsLinkNode !== null){
      _node.next = assitsLinkNode.next;
    assitsLinkNode.next = _node
    }
  }
  return linknode;
}


//完成remove方法
const linknode = genNodes(6);
const result = remove(linknode,0);
const newNode = new LinkNode(6);
const newLinkNode = insert(linknode, newNode, 1);
console.log(result.toString());
console.log(newLinkNode.toString());
//console.assert(result.toString()==='0,1,2,3,5')
