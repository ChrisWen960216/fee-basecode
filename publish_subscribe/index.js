/* Created By ChrisWen
 * 17/11/15
 * 发布 / 订阅模式
 */
const event = {
  clientList: [],
  listen: function(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
  },
  trigger: function() {
    const key = Array.prototype.shift.call(arguments);
    const fns = this.clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    for (let i = 0, fn;fn = fns[i++];) {
      fn.apply(this.arguments);
    }
  }
}
