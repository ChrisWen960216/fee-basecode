import Queue from '../class/Queue';

describe('Queue unit test', () => {
  it('should init a blank queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);
  });
});
