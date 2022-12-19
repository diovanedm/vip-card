import { InMemoryVipCardsRepository } from '@test/repositories/in-memory-vip-cards-repository';
import { RegisterVipCard } from './register-vip-card';

describe('Register VIP-CARD', () => {
  it('should be able to create a VIP-CARD', async () => {
    const inMemoryRegisterVipCardsRepository = new InMemoryVipCardsRepository();
    const registerVipCard = new RegisterVipCard(
      inMemoryRegisterVipCardsRepository,
    );

    await registerVipCard.execute({ quantityOrder: 1 });
    console.log(inMemoryRegisterVipCardsRepository.vipCards);
    expect(inMemoryRegisterVipCardsRepository.vipCards).toHaveLength(1);
  });
});
