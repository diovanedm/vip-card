import { QuantityOrder } from './value-objects/quantity-order';
import { VipCard } from './vip-card';

describe('Vip Card', () => {
  it('should be able to create a vipCard', () => {
    const vipCard = new VipCard({
      quantityOrder: new QuantityOrder(2),
      status: true,
    });
    expect(vipCard).toBeTruthy();
  });
});
