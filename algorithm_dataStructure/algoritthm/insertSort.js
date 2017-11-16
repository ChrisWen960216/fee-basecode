/* Created By ChrisWen
 * 17/11/16
 * 插入排序
 */

function insertSort(arrayList) {
  const {array} = arrayList;
  const {length} = array;
  let j, temp;
  for (let i = 1; i < length;i++) {
    j = i;
    temp = array[i];
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
}

module.exports = insertSort;
