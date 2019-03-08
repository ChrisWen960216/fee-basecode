/**
 * Created By ChrisWen
 *  2019/03/04
 */

class Queue {
  private queue: any[];

  constructor() {
    this.queue = [];
  }

  public size() {
    return this.queue.length;
  }

  public insert(node:any) {
    this.queue.push(node);
    return this.queue;
  }

  public remove() {
    this.queue.shift();
    return this.queue;
  }

  public clean() {
    this.queue = [];
    return this.queue;
  }

  public isEmpty() {
    const result = this.queue.length > 0;
    return result;
  }

  public print() {
    console.log(this.queue.toString());
  }
}

export default Queue;
