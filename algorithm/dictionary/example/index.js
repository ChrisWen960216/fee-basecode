/* Created By ChrisWen
 * 17/8/24
 * All dicitionary TestFile
 */
const dictionary = require('../class/dictionary.js');
let Dictionary = new dictionary();

const hashTable = require('../class/hashTable.js');
let HashTable = new hashTable();

const valuePair = require('../class/valuePair.js');
let ValuePair = new valuePair();
ValuePair.put(1, 2);

const linearProbing = require('../class/linearProbing.js');
let LinearProbing = new LinearProbing();