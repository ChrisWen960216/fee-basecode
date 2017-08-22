/* Created By ChrisWen
 * 17/8/22
 * 5. hotPotato --- 击鼓传花，循环队列
 */

const queue = require('../queue.js');

module.exports = function hotPotato(nameList, num) {
    let Queue = new queue();
    //console.log(Queue)
    for (let i = 0; i < nameList.length; i++) {
        Queue.enqueue(nameList[i]);
    //console.log(`现在队伍里有 ${Queue}`)
    }

    let eliminated = '';
    while (Queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            Queue.enqueue(Queue.dequeue());
        }
        eliminated = Queue.dequeue();
        console.log(`${eliminated} 在游戏中淘汰`);
    }
    return Queue.dequeue();
}

