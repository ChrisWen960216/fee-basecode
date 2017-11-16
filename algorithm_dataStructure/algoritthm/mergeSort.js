/* Created By ChrisWen
 * 17/11/16
 * 归并排序
 */

function mergeSort(arrayList) {
  let array = arrayList.array;
  array = mergeSortRec(arrayList);
}

function mergeSortRec(arrayList) {
  const array = arrayList.length ? arrayList : arrayList.array;
  const length = array.length;
  if (length === 1) {
    return array;
  }
  const mid = Math.floor(length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid, length);
  return merge(mergeSortRec(left), mergeSortRec(right));
}

function merge(left, right) {
  const result = [];
  let il = 0;
  let ir = 0;
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }
  while (il < left.length) {
    result.push(left[il]++);
  }
  while (ir < right.length) {
    result.push(right[ir]++);
  }
  return result;
}

module.exports = mergeSort;
