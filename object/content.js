/* Created By ChristianWen
 * 17/11/08
 * 储存内容
 */

const myObject = { number: 2 };
myObject.number; // 属性访问
myObject['number']; // 键访问

const prefix = 'fool';
myObject[`${prefix}BAR`] = 'HELLO';
