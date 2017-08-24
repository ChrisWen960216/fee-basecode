/* Created By ChrisWen
 * 17/8/24 
 * 2. HashTable -- 哈希表
 */
module.exports = class hashTable {
    constructor() {
        this.table = [];
    }

    //散列函数 -- 哈希表私有方法
    static loseloseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

    //向哈希表添加一个新的 Key-Value
    put(key, value) {
        let position = hashTable.loseloseHashCode(key);
        // console.log(position + '----' + key);
        this.table[position] = value;
    }

    //查找哈希表中的某个值
    get(key) {
        let position = hashTable.loseloseHashCode(key);
        return this.table[position];
    }

    //移除哈希表中的某个值
    remove(key) {
        let position = hashTable.loseloseHashCode(key);
        this.table[position] = undefined;
    }

    //输出哈希表的所有值
    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(`${i}:${this.table[i]}`);
            }
        }
    }
}