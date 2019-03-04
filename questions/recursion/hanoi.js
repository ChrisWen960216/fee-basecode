/** Created By ChrisWen
 *  17/11/10
 * 汉诺塔
 */
const hanoi = (disc, src, aux, dst) => {
  if (disc > 0) {
    hanoi(disc - 1, src, dst, aux);
    document.writeLn('Move disc' + disc + 'form' + src + 'to' + dst);
    hanoi(disc - 1, aux, src, dst);
  }
};
