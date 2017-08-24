const HashTable = require('./hashTable.js');
const LinkedList = require('../../linkedList/class/linkedList.js');

module.exports = class valuePair extends HashTable {
    constructor() {
        super();
    // this.table = []
    }

    static loseloseHashCode(key) {
        return super.loseloseHashCode(key);
    }

    put(key, value) {
        let position = valuePair.loseloseHashCode(key);
        let table = this.table;
        if (table[position] === undefined) {
            table[position] = new LinkedList();
        }
        table[position].append(new valuePair(key, value));
    }

    get(key) {
        let position = valuePair.loseloseHashCode(key);
        let table = this.table;
        if (table[position] !== undefined) {
        }
    }
}

//valuePair.loseloseHashCode(1);