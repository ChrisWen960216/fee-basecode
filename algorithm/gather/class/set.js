/* Created By ChrisWen
 * 17/8/23 
 * 1. Set -- 集合
 */

module.exports = class set {
    constructor() {
        this.items = {

        };
    }

    // 判断是否有该属性
    has(key) {
        return this.items.hasOwnProperty(key);
    }

    //添加
    add(value) {
        if (!this.has(value)) {
            this.items[value] = value;
            return this.items;
        } else {
            return false;
        }
    }

    //移除
    removeEventListener(value) {
        if (this.has(value)) {
            delete this.items[value];
            return true;
        } else {
            return false;
        }
    }

    //清空
    clear() {
        this.items = {};
    }

    //返回集合中的key的数量
    /** 仅限于现代浏览器
     *  size(){
     * return Object.keys(this.items).length
     * }
     */
    size() {
        let count = 0;
        for (let prop in this.items) {
            if (this.items.hasOwnProperty(prop))
                ++count;
        }
        return count;
    }

    //提取所有属性，返回 array
    values() {
        return Object.keys(this.items);
    // let keys = [];
    // for (let key in this.items) {
    //     if (this.items.hasOwnProperty(key)) {
    //         keys.push(key)
    //     }
    // }
    // return keys;
    }

}