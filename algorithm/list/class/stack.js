/* Created By ChrisWen
 * 17/8/21
 * 1. stack --- 先进后出,从尾部添加元素，从尾部弹出元素
 */

module.exports = class stack {
    constructor() {
        this.items = [];
    }
    // 设定只能使用 push 和 pop 从 this.items 中添加/删除元素
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }

    //查找 stack 中最后添加的元素
    peek() {
        return this.items[this.items.length - 1];
    }

    //判断 stack 是否为空
    isEmpty() {
        return this.items.length === 0;
    }

    //返回 stack 的长度
    size() {
        return this.items.length;
    }

    //清空 stack
    clear() {
        this.items = [];
    }

    //打印 stack
    print() {
        console.log(this.items.toString());
    }
}
