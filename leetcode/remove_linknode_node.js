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
  let assitsLinkNode = linknode;
  let position = 0;
  if(index === 0){
    return linknode.next;
  }
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


//完成remove方法
const linknode = genNodes(6);
const result = remove(linknode,0);
console.log(result.toString());
//console.assert(result.toString()==='0,1,2,3,5')
