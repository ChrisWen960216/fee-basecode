/** Created By ChrisWen
 *  Array - slice
 */

function mySlice(array: any[], begin?: number, end?: number): any[] {
  const result: any[] = [];
  const _begin: number = begin || 0; 
  const _end: number = end || array.length;
  
  let i: number = _begin;
  while (i < _end) {
    result.push(array[i]);
    i += 1;
  }
  
  return result;
 }