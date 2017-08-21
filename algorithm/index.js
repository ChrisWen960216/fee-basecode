/* Created By ChrisWen
 * 17/8/21 
 * This page just running into node enviroment,require all algoriModels to create a example file;
 */

//require 文件处
const Stack = require('./stack.js');
const baseConverter = require('./divideTwo.js');

// 1. stack-example
console.log('1. stack-example');

let newStack = new Stack();
console.log(newStack.isEmpty());

//2. divideSys-example
console.log('2. divideSys-example');

console.log(baseConverter(200, 2));