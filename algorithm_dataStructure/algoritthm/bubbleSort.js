/* Created By ChrisWen
 * 17/11/15
 * BubbleSort
 */

function bubbleSort(arrayList) {
  const {array} = arrayList;
  const {length} = array;
  for (let i = 0;i < length;i++) {
    for (let j = 0;j < length - 1;j++) {
      if (array[j] > array[j + 1]) {
        arrayList.swap(j, j + 1);
      }
    }
  }
}

function modifiedBubbleSort(arrayList) {
  const {array} = arrayList;
  const {length} = array;
  for (let i = 0;i < length;i++) {
    for (let j = 0;j < length - 1 - i;j++) {
      if (array[j] > array[j + 1]) {
        arrayList.swap(j, j + 1);
      }
    }
  }
}
module.exports = bubbleSort;
module.exports = modifiedBubbleSort;
