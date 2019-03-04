/** Created By ChrisWen
 *  Array - sort
 */

function mySort(array: any[], fn?: any): any[] {
  const assistFunc: (a: number, b: number) => number = (a: number, b: number): number => a - b;
  const _fn: any = fn || assistFunc;
  const roundCount: number = array.length - 1;
  for (let i: number = 0; i < roundCount; i++) {
    const minIndex: any = array[i];
    for (let k: number = i + 1; k < array.length; k++) {
      if (_fn.call(null, array[k], array[i]) < 0) {
        [array[i], array[k]] = [array[k], array[i]];
      }
    }
  }
  return array;
 }