/* Created By ChrisWen
 * 17/8/25
 * 4. valuePair --- 线性探查
 * 哈希表的子类，具体实现如下:
 * 对于哈希表[0,m-1]，如果初始探查地址为 d,则最长探查序列为：d,d+1,d+2...m-2,m-1,0,1...d-1;
 * 对于JS实现来说，实际上数组并不需要定义长度，则最长探查序列为 d,d+1,d+2....d+n(d+n为首个没有元素的哈希表地址);
 */

const HashTable = require('../class/hashTable.js');

module.exports = class linearProbing extends HashTable {
    constructor() {
        super()
    }

    static loseloseHashCode(key) {
        return super.loseloseHashCode(key);
    }

    //插入
    put(key, value) {
        let position = loseloseHashCode(key);
        let table = this.table;

        if (table[position] === undefined) { //如果该位置上没有元素，直接插入
            table[position] = new linearProbing(key, value);
        } else {
            while (table[position] !== undefined) { // 如果有元素，地址+1继续搜索，一直到没有元素位置，填入k--v
                position++;
            }
            table[position] = new linearProbing(key, value);
        }
    }

    //获取
    get(key) {
        let position = loseloseHashCode(key);
        let table = this.table;

        if (table[position] !== undefined) {
            if (table[position].key === key) {
                return table[position].value;
            } else {
                while (table[position] !== undefined && (table[position] && table[position].key !== key)) {
                    position++;
                }
                if (table[position] && table[position].key === key) {
                    return table[position].value;
                }
            }
        }
    }

    //移除
    remove(key) {
        let position = loseloseHashCode(key);
        let table = this.table;

        if (table[position] !== undefined) {
            if (table[position].key === key) {
                table[position] = undefined;
            } else {
                while (table[position] !== undefined && (table[position] && table[position].key !== key)) {
                    position++;
                }
                if (table[position] && table[position].key === key) {
                    table[position] = undefined;
                }
            }
        }
    }
}
