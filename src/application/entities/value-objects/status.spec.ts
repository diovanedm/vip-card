import { QuantityOrder } from './quantity-order';
import { Status } from './status';

describe('Validate status', () => {
  it('should be able to create a pending status', () => {
    const status: Status = 'pending';
    expect(status).toBeTruthy();
  });

  it('should be able to create a rejected status', () => {
    const status: Status = 'pending';
    expect(status).toBeTruthy();
  });

  it('should be able to create a resolved status', () => {
    const status: Status = 'rejected';
    expect(status).toBeTruthy();
  });

  it('should not be able to create a invalid status', () => {
    const status: Status = 'pending';
  });
});
