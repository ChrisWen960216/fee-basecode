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

// Object属性
Object.defineProperties(myObject, 'a', {
  value: 4,
  writable: true, // 可写
  configurable: true, // 配置 -设为false则是不可逆
  enumerable: true // 枚举,如果是false,就不会出现在 for...in 循环里
});

// 配置对象常量
const constObject = {};
Object.defineProperties(constObject, 'number', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: true
});

// 禁止扩展 （不允许对象写入新的属性）
Object.preventExtensions(constObject);

// 密封 （不能添加新属性，不能重新配置或删除现有属性，但是可以修改值）
Object.seal(constObject);

// 冻结 （不能改值，不能配置，不能写入程序，最高级别不可变性）
Object.freeze(constObject);
