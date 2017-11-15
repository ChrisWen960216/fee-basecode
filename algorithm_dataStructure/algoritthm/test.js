/* Created By ChrisWen
 * 17/11/15
 * 测试用例，先做一个数组（列表）
 */
const bubbleSort = require('./bubbleSort');
class ArrayList {
  constructor () {
    this.array = [];
  }
  insert(item) {
    this.array.push(item);
  }
  toString() {
    return this.array.join();
  }
  swap(index1, index2) {
    const {array} = this;
    const aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  }
}

const arrayList = new ArrayList();
function createdNonSortedArray(size) {
  for (let i = size; i > 0; i--) {
    arrayList.insert(i);
  }
  return arrayList;
}
createdNonSortedArray(5);
console.log(arrayList);
bubbleSort(arrayList);
console.log(arrayList.toString());