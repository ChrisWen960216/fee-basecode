/* Created By ChrisWen
 * 17/8/22 
 * 2. DoublyLinkedList --- 双向链表
 */
class doublyLinkedList {
    constructor() {
        this.state = {
            // node => 要插入的元素
            node: {
                element: '',
                next: null, //指向下一个元素
                prev: null //指向前一个元素
            },
            length: 0,
            head: null, //指向双向链表头部
            tail: null //指向双向链表尾部
        }
    }

    insert(position, element) {
        if (position > -1 && position <= this.state.length) {
            this.state.node = {
                element: element
            };
            let current = this.state.head; //当前元素
            let previous; //当前元素的前一个元素
            let index = 0;

            if (position === 0) {
                if (!this.state.head) {
                    this.state.head = this.state.node;
                    this.state.tail = this.state.node;
                } else {
                    this.state.node.next = current;
                    current.prev = this.state.node;
                    this.state.head = this.state.node;
                }
            } else if (position === this.state.length) { /* 在最后一项插入 */
                current = this.state.tail;
                current.next = this.state.node;
                this.state.node.prev = current;
                this.state.tail = this.state.node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                this.state.node.next = current;
                previous.next = this.state.node;

                current.prev = this.state.node;
                this.state.node.prev = previous;
            }
            this.state.length++;
            return true;
        } else {
            return false
        }
    }

    removAt(position) {
        if (position > -1 && position <= this.state.length) {
            let current = this.state.head;
            let previous;
            let index = 0;
            if (position === 0) {
                this.state.head = current.next;
                if (this.state.length === 1) {
                    this.state.tail = null;
                } else {
                    this.state.head.prev = null;
                }
            } else if (position === this.state.length - 1) {
                current = this.state.tail;
                this.state.tail = current.prev;
                this.state.tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current;
                current.next.prev = previous;
            }
            this.state.length--;
            return current.element;
        } else {
            return false;
        }
    }
}

let DoublyLinkedList = new doublyLinkedList();
DoublyLinkedList.insert(0, 10);
DoublyLinkedList.insert(0, 20);