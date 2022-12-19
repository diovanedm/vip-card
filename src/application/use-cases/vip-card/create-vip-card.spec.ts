import { InMemoryVipCardsRepository } from '@test/repositories/in-memory-vip-cards-repository';
import { CreateVipCard } from './create-vip-card';

describe('Create VIP-CARD', () => {
  it('should be able to create a VIP-CARD', async () => {
    const inMemoryCreateVipCardsRepository = new InMemoryVipCardsRepository();
    const createVipCard = new CreateVipCard(inMemoryCreateVipCardsRepository);

    await createVipCard.execute({ quantityOrder: 1, status: true });
    expect(inMemoryCreateVipCardsRepository.vipCards).toHaveLength(1);
  });

  it('should not be able to create a VIP-CARD with canceled status', () => {
    const inMemoryCreateVipCardsRepository = new InMemoryVipCardsRepository();
    const createVipCard = new CreateVipCard(inMemoryCreateVipCardsRepository);

    expect(
      async () =>
        await createVipCard.execute({ quantityOrder: 1, status: false }),
    ).toThrow();
  });
});
