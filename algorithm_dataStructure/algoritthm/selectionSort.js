/* Created By ChrisWen
 * 17/11/15
 *  选择排序
 */
function selectionSort(arrayList) {
  const {array} = arrayList;
  const {length} = array;
  let indexMin;
  for (let i = 0;i < length - 1;i++) {
    indexMin = i;
    for (let j = i; j < length;j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      arrayList.swap(i, indexMin);
    }
  }
}

module.exports = selectionSort;
