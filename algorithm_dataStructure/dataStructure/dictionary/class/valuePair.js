/* Created By ChrisWen
 * 17/8/25
 * 3. valuePair --- 分离链接
 * 哈希表的子类，在每一个哈希表的 k-v 点上再创建一个链表，将数据储存到链表上，避免因为存在相同的散列函数而导致数据丢失
 */

const HashTable = require('./hashTable.js');
const LinkedList = require('../../linkedList/class/linkedList.js');

module.exports = class valuePair extends HashTable {

  static loseloseHashCode(key) {
    return super.loseloseHashCode(key);
  }

  // 添加
  put(key, value) {
    const position = valuePair.loseloseHashCode(key);
    const table = this.table;

    if (table[position] === undefined) {
      table[position] = new LinkedList();
    }
    table[position].append(new valuePair(key, value));
  }

  // 查找
  get(key) {
    const position = valuePair.loseloseHashCode(key);
    const table = this.table;

    if (table[position] !== undefined) { // 验证特定位置上是否有元素存在
      let current = table[position].getHead(); // 获得linkedlist头部
      while (current.next) { // 遍历链表找到值
        if (current.next.element.key === key) {
          /** node链表中有element 和 next指针，同时element属性又是 class valuePair 的示例
                     *  element:{
                     * key:value}
                     */
          return current.element.value;
        }
        current = current.next;
      }

      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  }

  // 删除
  remove(key) {
    const position = valuePair.loseloseHashCode(key);
    const table = this.table;

    if (table[position] !== undefined) {
      let current = table[position].getHead();
      function removeKey(key) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
      }
      while (current.next) {
        // if (current.element.key === key) {
        //     table[position].remove(current.element);
        //     if (table[position].isEmpty()) {
        //         table[position] = undefined;
        //     }
        //     return true;
        // }
        this.removeKey(key);
        current = current.next;
      }
      this.removeKey(key);

      // if (current.element.key === key) {
      //     table[position].remove(current.element);
      //     if (table[position].isEmpty()) {
      //         table[position] = undefined;
      //     }
      //     return true;
      // }
    } else {
      return undefined;
    }
  }
};

// valuePair.loseloseHashCode(1);
