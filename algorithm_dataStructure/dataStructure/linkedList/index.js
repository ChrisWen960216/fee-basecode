/* Created By ChrisWen
 * 17/8/23
 * This page just running into node enviroment,require all LinkedList-algoriModels to create a example file;
 */

const linkedList = require('./class/linkedList.js');
const doublyLinkedList = require('./class/doublyLinkedList.js');

let LinkedList = new linkedList();
console.log('1. LinkedList-example');
LinkedList.append(10);
LinkedList.append(20);
LinkedList.append(30);

let DoublyLinkedList = new doublyLinkedList();
console.log('2. DoublyLinkedList-example');
DoublyLinkedList.insert(0, 10);
DoublyLinkedList.insert(1, 2);
DoublyLinkedList.removAt(0);