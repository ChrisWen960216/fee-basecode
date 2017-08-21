/* Created By ChrisWen
 * 17/8/21
 * 1. stack
 */

module.exports = function stack() {
    let items = [];

    // 设定只能使用 push 和 pop 从 items 中添加/删除元素
    this.push = element => {
        items.push(element);
    }
    this.pop = () => {
        return items.pop();
    }

    //查找 stack 中最后添加的元素
    this.peek = () => {
        return items[items.length - 1];
    }

    //判断 stack 是否为空
    this.isEmpty = () => {
        return items.length == 0;
    }

    //返回 stack 的长度
    this.size = () => {
        return items.length;
    }

    //清空 stack
    this.clear = () => {
        items = [];
    }

    //打印 stack
    this.print = () => {
        console.log(items.toString());
    }
}
