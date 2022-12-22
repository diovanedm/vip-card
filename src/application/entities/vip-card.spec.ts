import { VipCard } from './vip-card';

describe('Vip Card', () => {
  it('should be able to create a vipCard', () => {
    const vipCard = new VipCard();
    expect(vipCard).toBeTruthy();
  });
});
