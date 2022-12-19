import { QuantityOrder } from './value-objects/quantity-order';
import { VipCard } from './vip-card';

describe('Vip Card', () => {
  it('should be able to create a vipCard', () => {
    const vipCard = new VipCard({ quantityOrder: new QuantityOrder(2) });
    expect(vipCard).toBeTruthy();
  });

  // it('should not be able to create a vipCard with less than 0', () => {
  //   expect(() => new QuantityOrder(-1)).toThrow();
  // });

  // it('should not be able to create a vipCard with more than 12', () => {
  //   expect(() => new QuantityOrder(13)).toThrow();
  // });
});
