import { QuantityOrder } from './value-objects/quantity-order';
import { VipCard } from './vip-card';

describe('Vip Card', () => {
  it('should be able to create a vipCard', () => {
    const vipCard = new VipCard({
      quantityOrder: new QuantityOrder(0),
      status: false,
    });
    expect(vipCard).toBeTruthy();
  });
});
