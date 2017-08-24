/* Created By ChrisWen
 * 17/8/21
 * 3. queue --- 先进先出,从尾部添加元素，从头部弹出元素
 * 优先队列：按照设定的优先级大小进行添加
 */
const Queue = require('./queue.js');

class priorityQueue extends Queue {
    constructor() {
        super();
    };

    // queueElement(element, priority) {
    //     this.element = element;
    //     this.priority = priority;
    // }

    enqueue(element, priority) {
        let QueueElement = {
            element: element,
            priority: priority
        }
        if (this.isEmpty()) {
            this.items.push(QueueElement);
        } else {
            let added = false;
            for (let i = 0; i < this.items.length; i++) {
                if (QueueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, QueueElement);
                    added = true;
                    break
                }
            }
            if (!added) {
                this.items.push(QueueElement)
            }
            console.log(this.items);
        }
    }
}

let queue = new priorityQueue();
queue.enqueue(1, 2);
queue.enqueue(10, 12);
queue.enqueue(12, 21);
queue.enqueue(1111, 0);
// let fatherQueue = new Queue();
// fatherQueue.enqueue(1);