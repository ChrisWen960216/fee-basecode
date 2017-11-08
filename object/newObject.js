/* Created By ChristianWen
 * 17/11/08
 */

// new 做了些什么？
const obj = {};
obj._proto_ = Base.prototype;
Base.call(obj);
