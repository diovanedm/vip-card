import { Order } from './order';

describe('Order', () => {
  it('should be able to create a order', () => {
    const order = new Order({
      vipCardId: '123456',
      status: 'pending',
    });
    expect(order).toBeTruthy();
  });
});
