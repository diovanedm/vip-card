import { QuantityOrder } from './quantity-order';

describe('Validate quantity length', () => {
  it('should be able to create a number', () => {
    const quantityOrder = new QuantityOrder(2);
    expect(quantityOrder.value).toBeTruthy();
  });

  it('should not be able to create a number with less than 0', () => {
    expect(() => new QuantityOrder(-1)).toThrow();
  });

  it('should not be able to create a number with more than 12', () => {
    expect(() => new QuantityOrder(13)).toThrow();
  });
});
