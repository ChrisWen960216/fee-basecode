/* Created By ChrisWen
 * 17/8/24 
 * 1. Dictionary -- 字典
 */
module.exports = class dictionary {
    constructor() {
        this.items = {};
    }

    //验证 key 是否为 dictionary 的一个属性
    has(key) {
        return key in this.items;
    }

    //增加一个属性
    set(key, value) {
        this.items[key] = value;
    }

    //移除一个属性
    remove(Key) {
        if (this.items.has(key)) {
            delete this.items[key];
            return true;
        } else {
            return false;
        }
    }

    //查找key,并且获取value
    get(key) {
        return this.items.has(key) ? this.items[key].value : undefined;
    }

    //返回字典中所有的value(数组)
    values() {
        let values = [];
        let items = this.items;
        for (let i in items) {
            if (items.hasOwnProperty(i)) {
                values.push(items[i]);
            }
        }
        return values;
    }

    //返回字典中所有的key(数组)
    keys() {
        return Object.keys(this.items);
    }

    //获取字典长度
    size() {
        let count = 0;
        for (let prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                ++count;
            }
        }
        return count;
    }

    //初始化字典
    clear() {
        this.items = [];
    }

    //获取字典
    getItems() {
        return this.items;
    }
}