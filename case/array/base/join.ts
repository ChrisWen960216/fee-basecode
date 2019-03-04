/** Created By ChrisWen
 *  Array - join
 */

function myJoin(array: any[], char: string | number): any[] {
  let result: any[] = array || '';
  const length: number = array.length;
  for (let i: number = 0; i < length; i++) {
    result += char + array[i];
  }
  return result;
 }