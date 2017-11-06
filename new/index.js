/* Created By ChristianWen
 * 17/11/06
 */

// new 做了些什么？
function newFunction (Base) {
  const obj = {};
  obj._proto_ = Base.prototype;
  Base.call(obj);
}
