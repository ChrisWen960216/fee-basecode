/* Created By ChristianWen
 * 17/11/08
 * 内置对象 / 类型
 */

const strPrimitive = 'I am String';
typeof strPrimitive; // 'String'
strPrimitive instanceof String; // False

// instanceof 只能判断对象和函数，不能判断数字、字符串等.
