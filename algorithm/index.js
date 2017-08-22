/* Created By ChrisWen
 * 17/8/21 
 * This page just running into node enviroment,require all algoriModels to create a example file;
 */

//require allFiles
const Stack = require('./stack.js');
const baseConverter = require('./example/divideTwo.js');
const Queue = require('./queue.js');
const hotPotato = require('./example/hotPotato.js');



// 1. stack-example
console.log('1. stack-example');

let newStack = new Stack();
console.log(newStack.isEmpty());

//2. divideSys-example
console.log('2. divideSys-example');

console.log(baseConverter(200, 2));

//3. queue-example
console.log('3. queue-example');

let newQueue = new Queue();
console.log(newQueue.isEmpty());

//4. hotPotato-example
console.log('4. hotPotato-example');

let names = ['John', 'ChrisWen', 'Jelly', 'SiJie', 'Jennie'];
let winner = hotPotato(names, 7);
console.log(`胜利者 ${winner}`);