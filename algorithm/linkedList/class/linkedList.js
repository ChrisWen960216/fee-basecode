/* Created By ChrisWen
 * 17/8/22 
 * 1. LinkedList --- 链表
 */

module.exports = class linkedList {
    constructor() {
        this.state = {
            // node 插入节点
            node: {
                element: '',
                next: null
            },
            length: 0,
            head: null
        }
    }

    //向 链表尾部添加新的项目
    append(element) {
        this.state.node = {
            element: element,
            next: null
        }
        let current;

        if (this.state.head === null) {
            this.state.head = this.state.node;
        } else {
            current = this.state.head;

            while (current.next) {
                current = current.next;
            }
            current.next = this.state.node;
            console.log(`目前链表指向的元素是 ${current.element},下一个是 ${current.next.element}。目前链表长度是 ${this.state.length}`);
        }
        this.state.length++;
    }

    //移除给定位置的元素
    removeAt(position) {
        //检查越界值
        if (position > -1 && position <= this.state.length) { /* 检查给出的移除位置是否有效 */
            let current = this.state.head; // current 是对链表中当前元素的引用，这里默认值给的是第一个元素 即---head;
            let previous; //当前元素的前一个元素引用
            let index = 0;


            //移除第一项
            if (position === 0) { /* 移除第一项只需要让链表的head指向后面就可以 */
                this.state.head = current.next;
            } else {
                while (index++ < position) { /*迭代列表，到达指定位置 */
                    previous = current;
                    current = current.next;
                }

                //链接 previous 和 current 的 next ,跳过 current => 移除它
                previous.next = current.next;
            }
            this.state.length--;
            return current.element;
        } else {
            return null;
        }
    }

    //插入元素
    insert(position, element) {
        if (position > -1 && position <= this.state.length) {
            this.state.node = {
                element: element,
                next: null
            }
            let current = this.state.head;
            let previous;
            let index = 0;

            if (position === 0) {
                this.state.node.next = current;
                this.state.head = this.state.node;
            } else {
                while (index++ < position) {
                    previous = current; /* 对插入位置前一个元素的引用 */
                    current = current.next; /* 对插入位置后一个元素的引用 */
                }
                this.state.node.next = current; /* 将插入项先和 current(后一项) 连接起来 */
                previous.next = this.state.node; /* 再连接前一项和插入项 */
            }
            this.state.length++;
            return true;
        } else {
            return false;
        }
    }

    //将链表转化为字符串
    toString() {
        let current = this.state.head;
        let string = '';

        while (current) {
            string += ',' + current.element;
            current = current.next;
        }

        return string.slice(1);
    }

    //检索对应元素的位置
    indexOf(element) {
        let current = this.state.head;
        let index = 0;

        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    //移除给定的元素
    remove(element) {
        let index = this.indexOf(element); //先调用 indexOf 函数将给的 element 转化成 index
        return this.removeAt(index); // 再使用 removeAt(index) 移除对应元素
    }

    //检查空
    isEmpty() {
        return this.state.length === 0;
    }

    //查询链表长度
    size() {
        return this.state.length;
    }

    //获得链表首部
    getHead() {
        return this.state.head;
    }
}


