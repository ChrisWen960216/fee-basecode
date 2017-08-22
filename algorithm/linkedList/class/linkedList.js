/* Created By ChrisWen
 * 17/8/22 
 * 1. LinkedList --- 链表
 */

class linkedList {
    constructor() {
        this.state = {
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

    //移除元素
    removeAt(position) {
        //检查越界值
        if (position > -1 && position < this.state.length) { /* 检查给出的移除位置是否有效 */
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
}

let link = new linkedList();
link.append(10);
link.append(20);
link.append(30);
