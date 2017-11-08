/* Created By ChrisWen
 * 17/11/08
 * 克隆对象
 */
const anotherFunction = () => { /* ... */ };
const anotherObject = { a: 2 };
const anotherArray = [];

const myObject = {
  a: 2,
  b: anotherArray,
  c: anotherObject,
  d: anotherFunction
};

// 序列化 JSON
const newObj = JSON.parse(JSON.stringify(/* value */));

// ES5新增 - 属性描述符
Object.getOwnPropertyDescriptor(myObject, 'a');
