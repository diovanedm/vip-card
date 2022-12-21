import { QuantityOrder } from './quantity-order';
import { Status } from './status';

describe('Validate status', () => {
  it('should be able to create a pending status', () => {
    const status = new Status('pending');
    expect(status.value).toBeTruthy();
  });

  it('should be able to create a rejected status', () => {
    const status = new Status('rejected');
    expect(status.value).toBeTruthy();
  });

  it('should be able to create a resolved status', () => {
    const status = new Status('resolved');
    expect(status.value).toBeTruthy();
  });

  it('should not be able to create a invalid status', () => {
    const status = new Status('pending');
  });
});
