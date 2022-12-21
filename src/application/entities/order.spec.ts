import { Order } from './order';
import { Status } from './value-objects/status';

describe('Order', () => {
  it('should be able to create a order', () => {
    const order = new Order({
      vipCardId: '123456',
      status: new Status('pending'),
    });
    expect(order).toBeTruthy();
  });
});
