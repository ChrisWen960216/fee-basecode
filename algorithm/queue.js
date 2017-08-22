/* Created By ChrisWen
 * 17/8/21
 * 3. queue --- 先进先出,从尾部添加元素，从头部弹出元素
 */

module.exports = class queue {
    constructor() {
        this.items = [];
    }
    // 声明 添加 / 移除 元素的方法
    enqueue(element) {
        this.items.push(element);
        console.log('this.items', this.items);
    }

    dequeue() {
        return this.items.shift();
    }

    // 返回队列最前面的项
    front() {
        return this.items[0];
    }

    //判断队列是否为空
    isEmpty() {
        return this.items.length === 0;
    }

    //获取队列长度
    size() {
        return this.items.length;
    }

    //清空队列
    clear() {
        this.items = [];
    }

    //打印队列
    print() {
        console.log(this.items.toString());
    }
}
